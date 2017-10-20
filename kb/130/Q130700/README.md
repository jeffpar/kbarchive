---
layout: page
title: "Q130700: PC Mac: Err Msg: The Preference File Could Not Be Found..."
permalink: /kb/130/Q130700/
---

## Q130700: PC Mac: Err Msg: The Preference File Could Not Be Found...

{% raw %}

	Article: Q130700
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, on platform(s):
	   - the operating system: Mac OS (ALL) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Mail for PC Networks, Macintosh workstation, you can have
	difficulty connecting to the Maildata share on the server and/or logging into
	Mail. The error message displayed is:
	
	  The Preference file could not be found. Where is your postoffice located?
	
	CAUSE
	=====
	
	The following are possible causes of the above error:
	
	1. The client is being launched for the first time, and the MS Mail/PC LANs
	  Prefs cache file has not been created yet.
	
	2. The client has lost its connection to the Maildata share, and the connection
	  needs to be re-established.
	
	3. The client's rights on the server are insufficient for it to function.
	
	4. The MS Mail/PC LANs Prefs file is corrupt.
	
	RESOLUTION
	==========
	
	1. The MS Mail/PC LANs Prefs cache file will be created when you launch the
	  Macintosh client.
	
	  a. Launch the Mail client. The following message will be displayed:
	
	  The Preference file could not be found. Where is your postoffice created?"
	
	  b. Select Find PO.
	
	  c. In the Where is the Mail Data Folder? dialog box, select Desktop. Select
	     the Maildata server share found on the Desktop.
	
	  d. A new dialog box will be displayed, Select Postoffice [postoffice name]?.
	     Select the OK button. Type your user and password information.
	
	  e. Select the OK button. Mail will launch.
	
	2. Verify that the PC Maildata share can be seen on the Macintosh Desktop. If
	  you see the share icon, this confirms that the connection to the server has
	  been made. However, if the PC Maildata share cannot be seen, perform the
	  following steps to establish the connection:
	
	  a. From the Apple menu, choose the Chooser. Then select AppleShare and the
	     appropriate AppleTalk zone and Maildata server. Select the OK button.
	
	  b. In the Connect to the File Server [server name] as: dialog box, select
	     Registered User, and type the information for the name and password that
	     will enable the workstation to login to the Maildata server. Select the OK
	     button.
	
	  c. In the Select Items You Want to Use: dialog box, select the Maildata
	     share, and select the checkbox to enable the share to be opened at system
	     startup.
	
	  d. Accept the default of Save my Name Only, and select the OK button. The
	     Maildata share icon should appear on the Desktop.
	
	3. If the Maildata share is mounted on the Desktop, and the Macintosh client
	  still cannot find the postoffice, verify that you have sufficient rights to
	  connect to the Maildata share. You should have the following rights to the
	  Maildata subdirectory on the Mail for PC Networks server:
	
	  Network Operating System            Rights Required for Macintosh Users
	  -----------------------------------------------------------------------
	  Windows NT                          Full Control
	  LAN Manager                         All Permissions
	  NetWare                             Read, Write, Create, Erase,
	                                       Modify, and Filescan
	
	4. If the PC Mail postoffice can be seen and the access rights have been
	  verified, the MS Mail/PC LANs Prefs file may be corrupt.
	
	  a. To create a new one, drag the MS Mail/PC LANs Prefs file that is located
	     in the System Folder to the Trash.
	
	  b. Launch the Mail client. The following message will be displayed:
	
	  The Preference file could not be found. Where is your postoffice created?"
	
	  c. Select Find PO.
	
	  d. In the Where is the Mail Data Folder? dialog box, select Desktop. Select
	     the Maildata server share found on the Desktop.
	
	  e. A new dialog box will be displayed, Select Postoffice [postoffice name]?.
	     Select the OK button. Type your user and password information.
	
	  f. Select the OK button. Mail will launch.
	
	Additional query words: 3.20 mac preferences error
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	

{% endraw %}
