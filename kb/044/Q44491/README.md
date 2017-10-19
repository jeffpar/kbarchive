---
layout: page
title: "Q44491: Tandy 4000 &quot;Invalid Configuration&quot; after &quot;Disk Not Ready&quot;"
permalink: /kb/044/Q44491/
---

## Q44491: Tandy 4000 &quot;Invalid Configuration&quot; after &quot;Disk Not Ready&quot;

	Article: Q44491
	Product(s): See article
	Version(s): 4.50
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | SR# S890504-158 | mspl13_basic
	Last Modified: 17-MAY-1989
	
	It has been reported that a critical error on a floppy disk drive,
	such as error 71 "Disk not ready," can change the system configuration
	on a Tandy 4000 that is running QuickBASIC Version 4.50.
	
	After a critical error occurs, the drive is unreadable by the program
	or the operating system. This error causes the message "Invalid
	configuration, press F1 to reconfigure," to appear the next time the
	system is rebooted.
	
	The customer reported (after checking with a Tandy source) that the
	problem is caused by pin 34 (ready disk connect) on the drive
	controller. Apparently, the Tandy system normally ignores this pin,
	but when QuickBASIC gets the critical error, the status is changed. To
	correct the problem, open the circuit for pin 34.
	
	Microsoft has not confirmed this information.
