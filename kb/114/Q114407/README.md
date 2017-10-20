---
layout: page
title: "Q114407: SMTP: First Contact Form for SMTP Gateway"
permalink: /kb/114/Q114407/
---

## Q114407: SMTP: First Contact Form for SMTP Gateway

{% raw %}

	Article: Q114407
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, versions 2.1b, 3.0 
	-------------------------------------------------------------------------------
	
	Please use the checklist in this article to collect information on your
	system before calling Microsoft Product Support Services. You will be able
	to work with a Microsoft service engineer much more efficiently if all the
	information that might be needed to trace and resolve your problem is in
	front of you. In addition, any troubleshooting information the article may
	include may also help you solve your problem. Please be as complete and as
	specific as possible when you fill this form out.
	
	There are ten articles of this type--one for each gateway product. Each
	is different, so find the one suited to your case by searching these
	keywords:
	
	   x400fcc          msfcc
	   3cpmfcc          profsfcc
	   mcifcc           smtpfcc
	   ffapifcc         snadsfcc
	   faxfcc           connfcc
	
	
	              MICROSOFT SMTP GATEWAY PROBLEM REPORT FORM
	
	MICROSOFT MAIL        Post office version: _____________________
	
	                            Network name: _____________________
	
	                        Post office name: _____________________
	
	Gateway version:   3.0 new       3.0 update        2.xx
	
	TCP/IP version:   MS    FTP    LAN Workplace for MS-DOS    Pathways
	
	Network operating system:    LAN Man    Novell    Pathworks    NFS
	
	List any error messages
	
	Is this a new installation?   YES/NO
	
	
	Has it worked before?   YES/NO
	
	Is the problem common to one user?   YES/NO
	
	Is the problem common to one post office?   YES/NO
	
	Can you send?  YES/NO      Receive?   YES/NO
	
	Is problem intermittent or consistently reproducible? ________________
	
	If Novell, check database for hidden files, rights, etc.
	
	Get a log file (procedure below) as well as these CFG files in the
	SMTP directory: ADDR_MAP.CFG and LOCAL.CFG. Mail, fax, or email the
	new SMTPGATE.LOG file to Microsoft Product Support Services.
	
	
	To get a log file
	-----------------
	
	1. Stop the SMTP Gateway.
	
	2. Type: "ren <maildata drive>\log\smtpgate.log <maildata
	  drive>\log\smtpold.log" (without the quotation marks)
	
	3. Add: "-Cd", "-Gacsy" and "-Lacsy" to the "smtpgate" startup command.
	
	4. Restart gateway to recreate the error.
	
	Describe the problem
	--------------------
	
	Additional query words: smtpfcc
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:2.1b,3.0
	
	=============================================================================
	

{% endraw %}
