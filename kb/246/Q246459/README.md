---
layout: page
title: "Q246459: Err Msg: Unable to Enumerate Web Sites because the Following..."
permalink: kb/246/Q246459/
---

## Q246459: Err Msg: Unable to Enumerate Web Sites because the Following...

	Article: Q246459
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open the MMC containing the IIS snap-in, a dialog box appears with the
	following error message.
	
	  Unable to enumerate web sites because the following error occurred:
	
	  Object already exists
	
	This may also occur when attempting to access the Administration Web site. You
	may receive the following error message:
	
	  Unable to connect to the Active Directory Service Object. Please contact your
	  system administrator. Error:-2146893809
	
	No Web sites or services are enumerated in the MMC.
	
	CAUSE
	=====
	
	The permissions to the keys located in the \Documents and Settings\All
	Users\Application Data\Microsoft\Crypto\RSA\Machinekeys directory have been
	changed.
	
	RESOLUTION
	==========
	
	Change the permissions to the Machinekeys directory and the keys to allow the
	Administrators group and System account to have full control. To do this,
	perform the following steps:
	
	1. In Windows Explorer, right-click on the \Documents and settings\All
	  Users\Application Data\Microsoft\Crypto\RSA\Machinekeys directory.
	
	  Note: These are hidden files. To view these folder and files, select the Show
	  hidden files and folders radio button.
	
	2. Click the Security tab.
	
	3. Click the Add button.
	
	4. In the Look In: dialog box, select the local machine.
	
	5. Add the Administrators group with Full Control.
	
	6. Click Advanced, and then click Add.
	
	7. Select the Everyone group, and then click OK.
	
	8. Make sure the following check boxes are selected:
	
	  List Folder / Read Data
	  Read Attributes
	  Read Extended Attributes
	  Create Files / Write Data
	  Create Folders / Append Data
	  Write Attributes
	  Write Extended Attributes
	  Read Permissions
	
	  Note: These are the default settings.
	
	9. Click OK.
	
	10. Select the Reset Permissions on all Child objects and enable propagation of
	  inheritable permissions check box.
	
	Additional query words: iis CDONTS
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
