---
layout: page
title: "Q183614: XADM: Cannot Run Performance Optimizer From An Unattended Setup"
permalink: kb/183/Q183614/
---

## Q183614: XADM: Cannot Run Performance Optimizer From An Unattended Setup

	Article: Q183614
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Microsoft Exchange Server Setup program in unattended mode, it
	is not possible to run the Performance Optimizer at the end of the setup
	program.
	
	WORKAROUND
	==========
	
	In order to run the Performance Optimizer in unattended mode at the end of an
	unattended server setup, create a batch file with the following commands:
	
	     setup /qc:\setup.ini
	     perfwiz -fc:\perfopt.inf
	
	where setup.ini is the file containing the settings for the setup program and
	perfopt.inf is the file containing the settings for the Performance Optimizer.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
