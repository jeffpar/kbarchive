---
layout: page
title: "Q314932: HOW TO: Create an FTP Folder with Read Access but Not List Acces"
permalink: kb/314/Q314932/
---

## Q314932: HOW TO: Create an FTP Folder with Read Access but Not List Acces

	Article: Q314932
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 29-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Create the FTP Folder
	
	SUMMARY
	=======
	
	This step-by-step article describes how to set up File Transfer Protocol (FTP)
	folders on an Internet Information Services (IIS) 5.0 Web server so that a user
	can access files when the user knows only the file name and the folder contents
	are not listed.
	
	Create the FTP Folder
	---------------------
	
	1. Create a folder that you want the FTP service to point to.
	
	2. Right-click the folder, click Properties, and then click the Security tab.
	  Grant Full Control permissions to only the Administrators group.
	
	  NOTE: Remove the Everyone group if it is present.
	
	3. Click Advanced, and then click Add to add a new rule.
	
	4. In the account selection list, double-click the Anonymous User account or the
	  group that is used for FTP access.
	
	5. In the Apply Onto drop-down list, select Files Only.
	
	6. Click to select Allow for the following permissions:
	
	   - List Folder/Read Data
	
	   - Read Attributes
	
	   - Read Extended Attributes
	
	   - Read Permissions
	
	7. Click OK.
	
	8. Click Add to add another rule.
	
	9. Select the account that you selected in step 4.
	
	10. In the Apply Onto list, click to select This Folder only.
	
	11. Click to select Allow for the following permissions (note that List
	  permissions are not listed):
	
	   - Create Files/Write Data
	
	   - Create Folders/Append Data
	
	   - Write Attributes
	
	   - Write Extended Attributes
	
	   - Read Permissions
	
	12. Click OK until you have closed all of the property windows.
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	
