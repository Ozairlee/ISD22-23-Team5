# Requirements

## User Needs

### User stories
- As an avid shopper, I would like to recycle as part of my weekly shop.
- As Bristol Waste I want more access to recycling aorund the city to in turn mean there's less stress on us.
- As an climate change activist, I would like everyone to locate these banks to reduce the wrong waste.
- As a private cleaner I would like more people to know where local recycling banks are to reduce the waste that is wrongly dumped on us to clean.
- As a shop owber/manager/worker, I need to be able to see how much we can reduce waste and I want the public to help.

### Actors
Pretty much everyone.

### Use Cases
TODO: Describe each use case (one per team member).
    Give each use case a unique ID, e.g. UC1, UC2, ...
    Summarise these using the use-case template below.



| TODO: USE-CASE ID  = UC1 | USE-CASE NAME = Those wanting to Recycle | 
| -------------------------------------- | ------------------- |
| **Description** | General public. So what this means for us is that the public need a fast and easy way to locate the said banks. |
| **Actors** | Nearly All of them |
| **Assumptions** | They have to be in Bristol as location would be asked of for the user
| **Steps** | Get the user's location -- Query database for the amount of banks -- Checklist for the type of item they would like to recycle. |
| **Variations** | Checklist and User's Location may be not be available. |
| **Non-functional** | Automatically list the Nearest Bank when the location is found.|
| **Issues** | TODO: OPTIONAL - List of issues that remain to be resolved |

## Software Requirements Specification
### Functional requirements
TODO: create a list of functional requirements. 
    e.g. "The system shall ..."
    Give each functional requirement a unique ID. e.g. FR1, FR2, ...
    Indicate which UC the requirement comes from.


<Action><Result><Object>
Get // user location // returning the Default Location if Access is Denied
Query // For nearest Recycling Banks // Using the Recycling Bank dataset
List // Closest Bank // Using QUERY Results.

### Non-Functional Requirements
TODO: Consider one or more [quality attributes](https://en.wikipedia.org/wiki/ISO/IEC_9126) to suggest a small number of non-functional requirements.
Give each non-functional requirement a unique ID. e.g. NFR1, NFR2, ...

Indicate which UC the requirement comes from.
