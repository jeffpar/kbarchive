---
layout: page
title: "Q113827: X400: 3.2 Setup and Maintenance Utilities"
permalink: /kb/113/Q113827/
---

## Q113827: X400: 3.2 Setup and Maintenance Utilities

	Article: Q113827
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.2 of Microsoft Mail Gateway to X.400 has different areas for setup and
	maintenance. When you have installed the X.400 Gateway, use these three programs
	to set it up and operate it:
	
	- X.400 Gateway Administrator
	
	  This program sets up the X.400 Gateway. It is described in the "Microsoft
	  X.400 Gateway Administrator's Guide" in chapter 5 (Using the X.400 Gateway
	  Administrator Program) chapter 6 (Setting Up the Gateway) and chapter 8
	  (Operating and Administering the Gateway).
	
	- X400GATE
	
	  This program runs the Gateway. It is described in the "Microsoft X.400 Gateway
	  Administrator's Guide," chapter 8 (Operating and Administering the Gateway).
	
	- Microsoft Mail Administrator
	
	  This program sets up each postoffice for Microsoft Mail. Use it for the
	  procedures described in the "Microsoft X.400 Gateway Administrator's Guide,"
	  chapter 7 (Maintaining X.400 Addresses and Backbone Connections). For more
	  information about this program, see the "Microsoft Mail Administrator's
	  Guide."
	
	MORE INFORMATION
	================
	
	The X.400 Gateway Administrator and X400GATE programs are part of the Microsoft
	Mail Gateway to X.400 and are installed on the gateway postoffice. The Microsoft
	Mail Administrator program and Microsoft Mail External program are installed
	when you install Microsoft Mail.
	
	You can run the X400GATE program only from the Gateway PC. You can run the X.400
	Gateway Administrator program from any PC on the LAN that has access to the
	gateway postoffice.
	
	Here is when to use each program:
	
	
	Task                                   Program
	
	Set up backbone connections            Microsoft Mail Administrator
	Define the local MTA                   X.400 Gateway Administrator
	Define remote MTAs                     X.400 Gateway Administrator
	Route the mail                         X.400 Gateway Administrator
	Set up address conversion strings      X.400 Gateway Administrator
	Set up customized address mapping      X.400 Gateway Administrator
	Set up X.400 profile                   X.400 Gateway Administrator
	Specify gateway parameters             X.400 Gateway Administrator
	Map bodyparts                          X.400 Gateway Administrator
	Set the schedule                       X.400 Gateway Administrator
	Print the configuration report         X.400 Gateway Administrator
	Maintain the X.400 Address List        Microsoft Mail Administrator
	Maintain the Postoffice Address List   Microsoft Mail Administrator
	Run the gateway                        X400GATE
	View and print a log file              X.400 Gateway Administrator
	Return mail                            Microsoft Mail Administrator
	Delete mail                            Microsoft Mail Administrator
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
