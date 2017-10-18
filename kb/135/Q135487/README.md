---
layout: page
title: "Q135487: PC Ext: Running External and WAN Drives"
permalink: kb/135/Q135487/
---

## Q135487: PC Ext: Running External and WAN Drives

	Article: Q135487
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the External Mail program (any version) over a wide area network
	(WAN) using an integrated service digital (ISDN) line, the following error may
	occur in the SESSION.LOG when you use the DrivesDynamic and DrivesWAN options
	together in the EXTERNAL.INI file:
	
	  Network name not found: Drive in error: <drive letter>
	
	CAUSE
	=====
	
	If the postoffices are using routers to establish the connection, they may not
	be able to connect fast enough when the External Mail program tries to
	dynamically connect to a WAN postoffice. In this case, External thinks the
	postoffice no longer exists and marks the postoffice as being in error, even if
	mail is waiting to be sent to it. The External Mail program will wait a minimum
	of whatever the IntervalUpdate option is set to, the default is five minutes,
	before trying to resend mail to that postoffice.
	
	The Mail External program will wait a minimum period equal to the IntervalUpdate
	value (default=5 minutes) before you try to resend mail to that postoffice.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  File Name      Version
	  ----------------------
	  External.exe   3.5.23
	
	This hotfix has been posted to the following Internet location as Exty2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/pcmail-public/All-Y2K/
	
	
	WORKAROUND
	==========
	
	Either remove the DrivesDynamic option from the EXTERNAL.INI file, or lower the
	IntervalUpdate option so the External Mail program will not wait so long to
	recheck the postoffice before delivering mail.
	
	IntervalUpdate must be set to a value greater than zero in order for the second
	attempt to send mail to occur.
	
	MORE INFORMATION
	================
	
	With the DrivesWAN option in effect, checking for updates is the only
	opportunity the External Mail program has to re-establish the connection.
	Network traffic should be negligible, because it only checks FLAG.GLB to see if
	it has been updated.
	
	For additional information about the DrivesDynamic and DrivesWAN options, please
	see Chapter 12 of the "Administrator's Guide" for version 3.2 of Microsoft Mail
	for PC Networks.
	
	Additional query words: 3.20 3.20a parameter
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a
	Version           : WINDOWS:3.2,3.2a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
