---
layout: page
title: "Q118564: SMTP: Maintaining Config and Addresses On Re-Install, Upgrade"
permalink: /kb/118/Q118564/
---

## Q118564: SMTP: Maintaining Config and Addresses On Re-Install, Upgrade

	Article: Q118564
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	Here is how to save the Microsoft Mail Gateway to SMTP post office address
	list and the current SMTP setup configuration information when you re-
	install SMTP or move from version 2.1 to 3.0:
	
	
	1. Save the SMTP Address List: Extract the address list from the gateway post
	  office before you remove any portion of the gateway. Use the Import program
	  with the -X and -GSMTP options to specify extract and address type of SMTP.
	  The -F specifies a text file to be created with these names.
	
	  For example:
	
	  Import -x -gsmtp -fsmtplist.txt admin -ppassword -dm
	
	  Where SMTPLIST.TXT is a text file of all SMTP names and the post office
	  resides on drive M.
	
	2. Save Configuration: Save M:\SMTP\*.CFG files to another location, besides the
	  \SMTP subdirectory (this saves your configuration files, so you do not have
	  to reconfigure the gateway). Use the MS-DOS Copy command.
	
	3. Remove and Re-Install the SMTP gateway:
	
	  a. Insert the SMTP access diskette ("MS Mail Gateway Access for SMTP") into a
	     floppy drive and type "install-r" (without the quotation marks) [ENTER].
	
	  b. Insert the SMTP gateway diskette ("MS Mail Gateway to SMTP") into a floppy
	     drive and type "install-r" (without the quotation marks) [ENTER].
	
	  c. Connect to the post office you now want as the Gateway post office.
	
	  d. Insert the SMTP gateway diskette ("MS Mail Gateway to SMTP") into a floppy
	     drive and type "install" (without the quotation marks) [ENTER].
	
	  e. Insert the SMTP access diskette ("MS Mail Gateway Access for SMTP") into a
	     floppy drive and type "install" (without the quotation marks) [ENTER].
	
	4. Restore the SMTP Address List: Import the list of names created in the first
	  step. This places all the SMTP names on the new or udpated post office.
	
	  For example:
	
	  Import -gsmtp -fsmtpname.txt admin -ppassword -dn
	
	  Where SMTPLIST.TXT contains the SMTP names and the new post office is off the
	  N drive.
	
	5. Restore configuration: Copy previously saved *.CFG files to the new post
	  office database, in \SMTP\*.CFG. Check the configuration in the Admin
	  program. You can use the MS-DOS Copy command to accomplish this.
	
	REFERENCES
	==========
	
	"Microsoft Mail to Gateway to SMTP Administrator's Guide," chapter 2.
	
	
	Additional query words: 2.10 install reinstall
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300 kbMailGateSMTP210
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	
