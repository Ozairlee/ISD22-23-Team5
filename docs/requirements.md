# Requirements

## User Needs

### User stories
- As an avid shopper, I would like to recycle as part of my weekly shop.
- As Bristol Waste I want more access to recycling aorund the city to in turn mean there's less stress on us.
- As an climate change activist, I would like everyone to locate these banks to reduce the wrong waste.
- As a private cleaner I would like more people to know where local recycling banks are to reduce the waste that is wrongly dumped on us to clean.
- As a shop owber/manager/worker, I need to be able to see how much we can reduce waste and I want the public to help.

### Actors
General Public, Council, Maintainers and Companies.

### Use Cases
TODO: Describe each use case (one per team member).
    Give each use case a unique ID, e.g. UC1, UC2, ...
    Summarise these using the use-case template below.



| UC1 | Those wanting to Recycle | 
| -------------------------------------- | ------------------- |
| **Description** | General public. So what this means for us is that the public need a fast and easy way to locate the said banks. |
| **Actors** | General Public, Council, Maintainers and Companies. |
| **Assumptions** | They have to be in Bristol as location would be asked of for the user
| **Steps** | Get the user's location -- Query database for the amount of banks -- Checklist for the type of item they would like to recycle. |
| **Variations** | Checklist and User's Location may be not be available. |
| **Non-functional** | Automatically list the Nearest Bank when the location is found.|
| **Issues** | N/A |

| UC2 | Maintainers and Company | 
| -------------------------------------- | ------------------- |
| **Description** | These are the people that run the banks and clean, maintain and recycle. |
| **Actors** | Council, Maintainers and Companies. |
| **Assumptions** | They have to be in Bristol as location would be asked of for the user. Would also be checking their own bank to see if it does show up.
| **Steps** | Get the user's location - Query database for the amount of banks - Checklist for the type of item they would like to recycle. - Have a Search Bar to search up their own.  |
| **Variations** | Checklist and User's Location may be not be available. |
| **Non-functional** | Automatically list the Nearest Bank when the location is found.|
| **Issues** | Updating the database relies solely on the Open Data Website. |

## Software Requirements Specification
Below we will be listing our Software Requirements specific to the User Cases.
### Functional requirements
TODO: create a list of functional requirements. 
- **FR1:** Setting up a database for the user's queries to be handled. This is for both **UC1** and **UC2**.
- **FR2:** Allowing for an admin functionality to be able to hotfix issues. This is for **UC2** as some may display the wrong information and we do not want the public to be misled.
- **FR3:** Checklist to be made using HTML to allow for specific items to be recycled. **UC1** and **UC2** to save time and also check if the data provided by OpenDataBristol is the correct version.
- **FR4:** Allowing Map Integration by using the Google Maps service + imbeds + HTML AND JS Technology. **UC1** AND **UC2** to find the location and then to check if the given location is correct.


<Action><Result><Object>
* Get // user location // returning the Default Location if Access is Denied
* Query // For nearest Recycling Banks // Using the Recycling Bank dataset
* List // Closest Bank // Using QUERY Results

### Non-Functional Requirements
TODO: Consider one or more [quality attributes](https://en.wikipedia.org/wiki/ISO/IEC_9126) to suggest a small number of non-functional requirements.
Give each non-functional requirement a unique ID. e.g. NFR1, NFR2, ...

Indicate which UC the requirement comes from.
