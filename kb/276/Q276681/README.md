---
layout: page
title: "Q276681: HAC Does Not Start If Database Key Does Not Exist"
permalink: /kb/276/Q276681/
---

## Q276681: HAC Does Not Start If Database Key Does Not Exist

{% raw %}

	Article: Q276681
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbhis2000
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Host Security User Database (UDB) key can not be found when the SNA Host
	Account Cache (HAC) Service attempts to start, the following event errors may be
	posted in the event viewer.
	
	In the System Log:
	
	  Event ID: 7024 - Source: Service Control Manager
	
	  The SNA Host Account Cache service terminated with service-specific error
	  3781166337.
	
	In the Application Log:
	
	  Event ID: 22 - Source: SNA Host Security
	
	  Unable to retrieve the LSA secret. Error: The system cannot find the file
	  specified.
	
	You may also see the following error message in the Host Account Manager
	(Udconfig.exe).
	
	  Unable to locate Windows NT Account Synchronization Service in the target
	  Windows NT domain. To browse other domains, use the "Select Domain" option of
	  the "File" menu.
	
	CAUSE
	=====
	
	The UDB key does not exist. There are two possible reasons why the key does not
	exist:
	
	- An error occurred during the setup process such that the UDB key was not
	  generated.
	
	- The UDB key was deleted by an Administrator.
	
	RESOLUTION
	==========
	
	To resolve this problem, create a new UDB key by using the Hiudbkey.exe
	utility.
	
	To get help on this utility, at a command prompt, type the following:
	
	  "hiudbkey /?" (without the quotation marks)
	
	To verify that the UDB key does not exist, type "hiudbkey /showkey" (without the
	quotation marks). If the UDB key does not exist, you will receive the following
	error message:
	
	  Unable to get the key. Error: The system cannot find the file specified.
	
	The easiest way to create a new UDB key is to run "hiudbkey /newkey
	/randomlen:xx" (without the quotation marks).
	
	Note that xx is a specified length of randomly generated key values. The valid
	range is 12-60. For example, the following is a valid command:
	
	  "hiudbkey /newkey /randomlen:35" (without the quotation marks)
	
	The following is not a valid command:
	
	  "hiudbkey /newkey /randomlen:10" (without the quotation marks)
	
	MORE INFORMATION
	================
	
	The Hiudbkey.exe command-line utility is used to set, delete, or retrieve the
	HAC database key. This key is created and stored in LSA during the installation
	of the HAC database component. The UDB key is the security key that is used for
	encrypting or decrypting the information that is stored in the Host Security
	User Database.
	
	NOTE: If the UDB key is deleted after the HAC is already populated, once a new
	UDB key is created, you will need to run the Host Security Domain Wizard again
	and repopulate the cache. Once the UDB key is deleted, there is no way to
	recover the HAC.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbhis2000 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	
	=============================================================================
	

{% endraw %}
