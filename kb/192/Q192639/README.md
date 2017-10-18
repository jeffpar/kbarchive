---
layout: page
title: "Q192639: HOWTO: Use PDW to Deploy Using the FTP Web Publishing Method"
permalink: kb/192/Q192639/
---

## Q192639: HOWTO: Use PDW to Deploy Using the FTP Web Publishing Method

	Article: Q192639
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbVBp kbVBp600 kbWebClasses kbDSupport
	Last Modified: 04-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using the Package and Deployment Wizard (PDW), you will receive the following
	dialog if you try to deploy to a FTP Web Publishing site that doesn't have the
	write access with the Web publishing method set to "FTP."
	
	  "Unexpected error number C0042116 has occurred. The server returned the
	  following message:
	  200 Type set to 1.
	  200 PORT command successful.
	  550 WP.CAB:Access is denied."
	
	MORE INFORMATION
	================
	
	The source of this error may be one of the following:
	
	- access rights on the server you are trying to post to.
	
	  -or-
	
	- the files you are posting are marked as read-only.
	
	Steps to Create a New FTP Virtual Directory and Allow Write Access
	------------------------------------------------------------------
	
	1. From the Start menu, open the Internet Service Manager on the server
	  computer. This starts up Microsoft Management Console (MMC).
	
	2. Click Console Root, then click Internet Information Server, then click the
	  name of your Web server machine.
	
	3. Start up Microsoft Management Console (MMC).
	
	4. Right-click on "Default FTP Site," choose "New," and then choose "Virtual
	  Directory" from its context menu.
	
	5. Type in an alias to be used to access the virtual directory (for example,
	  ftpupload).
	
	6. Enter the physical path of the directory to map the virtual drive (for
	  example, c:\inetpub\ftproot).
	
	7. Select the checkbox "Allow write access."
	
	  NOTE: Allowing write access to a virtual directory is a SECURITY RISK. Make
	  sure you only allow write access to virtual directories you know are secure.
	
	8. Right-click on Default FTP Site and choose "Stop."
	
	9. Right-click on Default FTP Site and choose "Start."
	
	Giving Access to an Existing FTP Directory
	------------------------------------------
	
	1. From the Start menu, open the Internet Service Manager on the server
	  computer. This starts up Microsoft Management Console (MMC).
	
	2. Click Console Root, then click Internet Information Server, and then click
	  the name of your Web server machine.
	
	3. Right-click on the Default FTP Site node, then choose Properties.
	
	4. Select the Home Directory tab.
	
	5. Check the Write check box.
	
	  NOTE: Allowing write access to a virtual directory is a SECURITY RISK. Make
	  sure you only allow write access to virtual directories you know are secure.
	
	6. Right-click on Default FTP Site and choose "Stop."
	
	7. Right-click on Default FTP Site and choose "Start."
	
	  IMPORTANT: If you get the FTP authentication dialog box, type in "anonymous"
	  for user name and "Me@somewhere" for the password; this will allow an
	  anonymous login.
	
	REFERENCES
	==========
	
	Please see the following Microsoft Knowledge Base article for more information
	on the PDW(Package and Deployment Wizard):
	
	  Q190046 INFO: VB6 Readme Part 6 - Wizard Issues
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbVBp kbVBp600 kbWebClasses kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	
