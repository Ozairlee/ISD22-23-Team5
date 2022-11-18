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

| UC3 | Council Analysis | 
| -------------------------------------- | ------------------- |
| **Description** | This would be the council having access to the data to analyse the concentration of bins and see whether we need more in certain areas.
| **Actors** | Council, Maintainers and Companies. |
| **Assumptions** |  Would have to have access to the backend and also access to changing OpenDataBristol APIs.
| **Steps** | Users have to use the system to create data. The council will then use that data to start analysis. Having and Admin login to the website to check further. Finally be able to distinguish and see if there are bins needed   |
| **Variations** | Checklist and User's Location may be not be available. |
| **Non-functional** | If the admin login actually works. |
| **Issues** | Updating the database relies solely on the Open Data Website. - Not having enough data to use ot|

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
These are Qualities and Attributes that we will try to match and better the website on:

- **NFR1:** Portability as **UC1** would like to know where one is on the go so optimising for a phone will be needed. A test we can do to make sure it works is to use a phone and see if the website loads correctly without any downloads.
- **NFR2:** Maintainability, especially Changeability just incase **UC2** has notified us of incorrect data that was given or incorrect information that is written. We can't really test this until we contact some companies that run it.
- **NFR3:** Functionality will be another one to see if our FRs do live up to what was discussed. An attribute of this we can discuss is if the Databases do handle a query correctly or if the checklist actually filters correctly etc. A test we can do is a series of checks and limit tests to see what it can handle and if it will throw any errors when it's towards the limit. This would come from **UC1** mostly as most of the time too many commands input does end up slowing and sometimes crashing the website so doing so will help QOL.
- **NFR4:** Usability as **UC1** would for sure like to see the closest Recycling Bank within a mile at first. If the user has none within a mile, it will open up the quick search to 5 miles. If it is exactly 1 mile, it will include this as the database would handle this as a double. A test that can be carried out is to just check if it even works.