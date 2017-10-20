---
layout: page
title: "Q107204: PROFS: Use of PROFSIN.DAT, Format of PROFSIN.CSI Files"
permalink: /kb/107/Q107204/
---

## Q107204: PROFS: Use of PROFSIN.DAT, Format of PROFSIN.CSI Files

{% raw %}

	Article: Q107204
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.1,3.2,3.3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, versions 3.1, 3.2, 3.3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	PROFSIN.DAT FILE
	----------------
	
	When messages are sent through the Microsoft Mail Gateway to IBM PROFS and
	OfficeVision, a temporary file called PROFSIN.DAT is created on the LAN side of
	the Gateway. This is a text file that has been converted to EBCDIC; it is
	unreadable in the PC environment.
	
	PROFSIN.CSI FILE
	----------------
	
	PROFSIN.DAT is transferred by way of the Gateway's 3270 emulator to the host
	environment, where it is renamed PROFSIN.CSI on the VMID's 191 A disk for the
	host side of the Gateway.
	
	PROFSIN.CSI FORMAT
	------------------
	
	  TO: PROFSNODE(USER1)
	  FROM: ADMIN GATENET/PROFS30
	  DATE: 02-03-93
	  TIME: 10:44
	  SUBJECT: Test Showing the PROFSIN CSI file
	  PRIORITY:
	  TOKEN: BORDER: 11
	  TEXT: 14
	
	  FROM: Administrator
	
	  TO: User1
	  DATE: 02-03-93
	
	  TIME: 10:36
	  CC:
	  SUBJECT: Test Showing the PROFSIN CSI file
	  PRIORITY:
	  ATTACHMENTS:
	
	  -----------------------------------------------------------------
	  This is a test file. This is the format on the Host.
	
	PROFSIN.CSI FIELDS
	------------------
	
	TO/FROM
	-------
	
	The TO token on line 1 shows the VM destination; the FROM token on line 2 shows
	the MS mail sender.
	
	TEXT
	----
	
	The TEXT token on line 8 shows the how many lines of text are in the message--the
	count begins on the first line after the TEXT token.
	
	ATTACHMENTS
	-----------
	
	If there are attachments (this example has none) each has one ATTACHMENT token on
	the line preceding the TEXT token and containing the attachment's file name.
	Attachment information starts on the line following the TEXT portion of the
	message, and that is determined by the number of lines following the TEXT token.
	In the example above, that number is 14 so the attachment would begin on the
	15th line after the TEXT token.
	
	
	Additional query words: 3.10 3.1 3.20 3.2 3.30 3.3
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS320 kbMailGateIBMPROFS310 kbMailGateIBMPROFS330
	Version           : :3.1,3.2,3.3
	
	=============================================================================
	

{% endraw %}
