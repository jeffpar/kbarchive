---
layout: page
title: "Q108375: SMTP: How to Start SMTPGET"
permalink: /kb/108/Q108375/
---

## Q108375: SMTP: How to Start SMTPGET

{% raw %}

	Article: Q108375
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Versions 2.1 and 3.0 of Microsoft Mail Gateway to SMTP spawns SMTPGET.EXE to
	query the SMTP mailbag on the Microsoft Mail for PC Networks postoffice, and
	then translate it to Microsoft Mail Message Format(MMFF) and deposit it into the
	M:\SMTP\from_nc.api text file.
	
	The MMFF structure is defined in the Microsoft Mail Software Development Kit File
	Format API(FFAPI) manual.
	
	SMTPGET.EXE is started with the following options:
	
	  SMTPGET -d<m> -h -j -n1 m:\smtp\from_nc.api
	
	MORE INFORMATION
	================
	
	This is the same program that the Microsoft Software Development Kit (File
	Format API) uses to get mail from the Mail for PC Networks postoffice The
	options specified are defined in the FFAPI manuals. They mean:
	
	-d<m>                  the drive that contains the MS Mail Post Office
	-h                     use the extended header MMFF format
	-j                     use encapsulation MMFF format
	-n1                    get 1 message at a time from the SMTP mailbag
	m:\smtp\from_nc.api    save the MMFF formatted messages in this file
	
	Additional query words: 2.10 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300 kbMailGateSMTP210
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	

{% endraw %}
