---
layout: page
title: "Q121592: SNA Err Msg: Configuration Error. Allocation Error...."
permalink: /kb/121/Q121592/
---

## Q121592: SNA Err Msg: Configuration Error. Allocation Error....

{% raw %}

	Article: Q121592
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to an AS/400 through the SNA Server's Win5250
	applet, the following error message may appear after the user name and password
	are entered in the session level sign-on screen:
	
	  Configuration Problem
	  Allocation Error. Security Not Valid. RC 0003 080F6051.
	
	CAUSE
	=====
	
	This error condition occurs when the AS/400 device security has been set
	incorrectly.
	
	NOTE: The following similar error message appears when the incorrect user name
	and password are entered at the session level sign-on screen, but should not be
	confused with the aforementioned error condition:
	
	  The userid or password is not valid. Try again or contact your system
	  administrator. Primary return code: 0003 Secondary return code: 080F6051
	
	WORKAROUND
	==========
	
	To correctly sign on, the Limit Device Access value on the AS/400 needs to be
	set to "0=Explicit device access not needed." In the failing condition, this
	value will be set to "1= Explicit device access needed."
	
	To check this value, do the following:
	
	1. At the AS/400 Main menu, type WRKSYSVAL and then press ENTER. ("WRKSYSVAL"
	  means Work with System Values.)
	
	2. Scroll down the list to QLMTSECOFR and place a 5 on the adjacent line and
	  then press ENTER.
	
	3. At the Display System Value screen, change the Limit Device Access value to
	  0.
	
	Additional query words: prodsna 2.10 2.00
	
	======================================================================
	Keywords          : kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	
	=============================================================================
	

{% endraw %}
