---
layout: page
title: "Q131380: PC WSPlus: Dynamic Connections through GSNW to Novell Servers"
permalink: /kb/131/Q131380/
---

## Q131380: PC WSPlus: Dynamic Connections through GSNW to Novell Servers

{% raw %}

	Article: Q131380
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can open another user's Appointment Books maintained on a Novell server by
	accessing them through the Microsoft Windows NT Advanced Server (NTAS) Gateway
	Services for NetWare by various Microsoft networking clients running version 1.0
	and 1.0a of Microsoft Schedule+ for Windows.
	
	
	MORE INFORMATION
	================
	
	This configuration requires three machines:
	
	- User Workstation.
	
	- NTAS with Gateway Services for NetWare loaded.
	
	- Novell NetWare Server.
	
	Workstation -->-->-->-- NTAS w/GSNW -->-->-- NetWare Server
	(User1)              (NT_Srvr_1)          (NW_Srvr_1/SYS:)
	
	NOTE: Read the entire setup procedures before continuing.
	
	On the NetWare Server
	---------------------
	
	Create the Mail for PC Networks postoffice, granting Trustee Rights.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q103901 Minimum NetWare Trustee Assignments for Mail Database
	
	On the NTAS machine
	-------------------
	
	1. From File Manager, create a share for the Netware Server connecting with a
	  valid user account on the NetWare Server. For example,
	
	  NW_Server_1/SYS <no colon>
	
	  For additional information on setting up the GSNW account, please see the
	  following articles in the Microsoft Knowledge Base:
	
	  Q118469 GSNW Gateway requires NTGATEWAY group
	
	  Q118828 File locks exceed default limit on Netware Server with GSNW
	
	2. From File Manager, reshare the created share to allow access by the various
	  MS Networking Clients. For example,
	
	  \\NT_Server_1\NW_Share
	
	The next step is to set up the Dynamic Connection information for the Windows NT
	postoffice.
	
	1. Launch the ADMINSCH.EXE program for the Windows NT postoffice.
	
	2. From the Administration menu, choose Distribution Settings.
	
	3. From the Distribution Setting dialog box, select the desired NetWare
	  Postoffice.
	
	4. Select the Settings button.
	
	5. Enter the following information in the dynamic connection information boxes
	  for the selected Netware postoffice as follows:
	
	  Network Path: <A0><A0>\\NT_Server_1\NW_Share
	
	  This entry points to the share created on the NT Server/NGWS connected to
	  NW_Srvr_1/SYS:
	
	  Directory: <A0><A0><A0>\MSMail\Maildata
	
	  This is the path to Maildata on the Novell Server.
	
	  Password: <A0><A0><A0><blank>
	
	  UserName: <A0><A0><A0><blank>
	
	NOTE: Use of the Password and UserName fields will send out an NCP type packet
	that will not be recognized by the Windows NT Server that requires SMB type
	packets.
	
	At this point, the User1 with his or her postoffice on the Windows NT server
	should be able to open another user's Appointment Books on the Novell NetWare
	server using the GSNW sharepoint.
	
	Additional query words: schedule plus 1.00 1.00a GSNW Novell Netware NT dynamic connections
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	

{% endraw %}
