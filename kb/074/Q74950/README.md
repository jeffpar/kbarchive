---
layout: page
title: "Q74950: Troubleshooting Applications on Networks"
permalink: /kb/074/Q74950/
---

## Q74950: Troubleshooting Applications on Networks

{% raw %}

	Article: Q74950
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	When troubleshooting a Microsoft application running on a network, the following
	steps will help simplify the troubleshooting process:
	
	Questions to ask:
	
	1. Does the problem occur on all workstations or to all users?
	
	   - If the answer is yes, and there is no record of the error message in the
	     knowledge base, try to find some factors (hardware, software, and so on)
	     that are common to all of the machines or all of the users.
	
	   - If the answer is no, and there is no record of the error message in the
	     knowledge base, try to find common factors relative to those machines
	     affected (similar software, hardware, and so on).
	
	2. Does the problem occur when logged in as Supervisor?
	
	   - If the answer is yes, it is probably not a rights-related issue.
	
	   - If the answer is no, it is probably an issue related to the rights of the
	     individual receiving the error message.
	
	3. If the problem still is not solved, disable all non-network related programs
	  from the AUTOEXEC.BAT, CONFIG.SYS, and login scripts (if applicable). If the
	  problem still occurs, it is not related to software conflict.
	
	Specific steps to follow if the network is Novell:
	
	1. If the application is Microsoft Word and the network is Novell, check to see
	  if Word was started with the /N switch and if the MSWNET, for Word versions
	  earlier than 5.50, or MSWNET55, for Word version 5.50, variable is set
	  correctly.
	
	   - If the MSWNET was not set or set correctly, set the MSWNET (MSWNET55)
	     variable through the login script or in the manner described in the
	     "Setting Up Network Workstations for Multiple Users" application note.
	
	2. Is the problem printing related?
	
	   - Type in CAPTURE SH at the DOS prompt. This command provides information on
	     how Novell is capturing the data to the LPT port.
	
	     If the TABS field displays NO CONVERSION, the job configuration is set to
	     BYTESTREAM (appropriate for applications with a print driver). If the TABS
	     field displays anything other than NO CONVERSION, it is set to TEXT
	     (appropriate for applications without a print driver). See the PRINTCON
	     menu and CAPTURE command line utilities in the "Introduction to Novell"
	     section of the Novell documentation.
	
	     If printing a large document or a document with numerous downloaded fonts
	     or graphics, increase the time-out count for the job.
	
	     If printing to a postscript printer, do not use a banner page.
	
	   - If printing problems still occur, follow the steps listed in "What to Do
	     If a Network Printer Won't Print."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
