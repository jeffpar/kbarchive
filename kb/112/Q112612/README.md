---
layout: page
title: "Q112612: Problems Sending Mail After Installing AWFAX"
permalink: /kb/112/Q112612/
---

## Q112612: Problems Sending Mail After Installing AWFAX

{% raw %}

	Article: Q112612
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft At Work PC Fax, you may no longer be able to send
	mail to users sharing the same post office. When you send a message to a member
	of the post office, the message returns with an "Undeliverable Mail" error
	message. The text of the mail message reads
	
	  The message recipient was invalid.
	
	-or-
	
	  The PostOffice List icon in the Address Book may be unavailable in Microsoft
	  Mail.
	
	-or-
	
	  The Open Other's Appt. Book option may be unavailable in Microsoft Schedule+.
	
	CAUSE
	=====
	
	If Microsoft Mail was installed with Microsoft Windows for Workgroups version
	3.1 and you choose to install Microsoft At Work PC Fax for "Fax Only" rather
	than "Email And Fax" in Windows for Workgroups 3.11, the MSMAIL.INI file is not
	properly updated.
	
	RESOLUTION
	==========
	
	If Microsoft Mail was not installed before you started At Work PC Fax, make the
	following changes:
	
	1. Rename the following files:
	
	  MSMAIL.INI
	  EFAXPUMP.INI
	  SCHDPLUS.INI.
	
	2. Choose the Fax icon in Control Panel.
	
	3. Select the Email And Fax option and choose OK.
	
	4. Select the appropriate settings for your fax board.
	
	5. Install Microsoft Mail.
	
	If Microsoft Mail was installed prior to starting At Work PC Fax, do the
	following:
	
	1. Remove the [Providers] section of the MSMAIL.INI file.
	
	2. Rename the EFAXPUMP.INI file.
	
	  NOTE: If you are receiving the following error message when starting Microsoft
	  Schedule+
	
	  Your schedule transport DLL does not support the current transport. You will
	  only be able to work off-line. PCMail users are supported.
	
	  also perform the following step:
	
	  a. In the SCHDPLUS.INI file, remove the following statement:
	
	         ScheduleTransport=TRNOFF
	       
	
	     NOTE: The "ScheduleTransport=TRNOFF" entry in the SCHPLUS.INI file causes
	     the "This account is for a resource" check box in the Schedule Plus
	     Options dialog box to be unavailable.
	
	     -or-
	
	     Rename the SCHDPLUS.INI file.
	
	3. Choose the Fax icon in Control Panel.
	
	4. Select the Email And Fax option and choose OK.
	
	5. Select the appropriate settings for your fax board.
	
	Additional query words: 3.11 fax missing postoffice computer efax grey gray greyed grayed out address book "Your schedule transport does not support the current"
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
