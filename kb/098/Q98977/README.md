---
layout: page
title: "Q98977: PC WSPlus: Setting up Dynamic Connections"
permalink: kb/098/Q98977/
---

## Q98977: PC WSPlus: Setting up Dynamic Connections

	Article: Q98977
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-SEP-1999
	
	1.00 1.00a
	WINDOWS
	kb3rdparty kbinterop kbtlc
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Schedule+ for Windows allows a user to open another user's calendar
	file on the network. The steps below are necessary to ensure that Schedule+
	Dynamic Connections has been configured properly for Novell NetWare, LAN
	Manager, and Banyan VINES networks.
	
	MORE INFORMATION
	================
	
	The following steps verify that the user's access privilege is Read Appointments
	And Tasks or higher.
	
	User1 - User granting access privilege
	User2 - User wanting access privilege
	
	1. Run Schedule+ for User1.
	
	2. From the Options menu, choose Set Access Privileges.
	
	3. Choose the Add button.
	
	4. Select User2 by double-clicking that user ID from the address list.
	
	5. Choose the OK button.
	
	6. Highlight User2, and select Read or a higher privilege.
	
	7. From the File menu, choose Exit And Sign Out.
	
	The following describes the steps required to set up Dynamic Connection from the
	Schedule+ Administration program (ADMINSCH.EXE) in Windows:
	
	1. From the Administration menu, choose Distribution Settings.
	
	2. Choose Add Postoffice.
	
	3. Select the Postoffice (PO) to dynamically connect to.
	
	4. Choose the OK button.
	
	5. Highlight the desired PO.
	
	6. Choose Settings.
	
	7. Make the following changes to the Modify Distribution Frequency dialog box:
	
	  For Novell NetWare:
	
	  Dynamic Connection Information
	
	  Network Path: Server\Volume:
	
	  Directory: <path to maildata>
	
	8. If Schedule Distribution is being used, ALL POF files will have to be deleted
	  also. This file contains Assistant routing information in the specific user's
	  record, if one is designated by the user. If the Assistant's postoffice is
	  renamed, the 10x10x10 routing information becomes invalid.
	
	  This will cause two things to happen:
	
	   - The assistant will be denied access to the user's calendar file.
	
	   - The assistant will not receive the meeting request/response messages.
	
	Notes
	-----
	
	   - If Network Path points to the root of the MAILDATA directory, there is no
	     need to enter data. If Network Path does not point to the MAILDATA
	     directory, you must enter the directory path to MAILDATA.
	
	   - The following password and user name are required only if user-level
	     security is being implemented on the Novell postoffice server.
	
	NOTE: If you are using a LanManager type connection and you specify a username
	and password to connect to a the Microsoft Mail Postoffice, the connection will
	fail. Because the inclusion of a username and password causes Adminsch to use
	NCP (Netware Core Protocol) to connect a drive instead of the SMB (Server
	Message Block).
	
	  Password: The password corresponding to the Username given below.
	
	  Username: An account created for guests to view the contents of a user's
	  calendar file from another postoffice server.
	
	For Microsoft LAN Manager:
	
	  Dynamic Connection Information
	
	  Network Path: \\Server\Share
	
	  Directory: <path to maildata>
	
	Notes
	-----
	
	   - If Network Path points to the root of the MAILDATA directory, there is no
	     need to enter data. If Network Path does not point to the MAILDATA
	     directory, you must enter the directory path to MAILDATA.
	
	For Banyan VINES:
	
	  Dynamic Connection Information
	
	  Network Path: File Svcs@Group@Org
	
	NOTE: This is the Banyan VINES file service StreetTalk name that is set up by the
	Network System Administrator when building the server and loading the
	application software.
	
	  Directory: <path to maildata>
	
	Notes
	-----
	
	   - If File Services points to the root of the MAILDATA directory, there is no
	     need to enter data. If File Services does not point to the MAILDATA
	     directory, you must enter the directory path to MAILDATA.
	
	   - The password and user name below are only required if user-level security
	     is being implemented on the Banyan VINES postoffice server.
	
	  Password: The password corresponding to the Username given below.
	
	  Username: An account created for guests to view the contents of a user's
	  calendar file from another postoffice server.
	
	
	Additional query words: schedule plus 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
