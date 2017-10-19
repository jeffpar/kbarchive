---
layout: page
title: "Q143000: PC Ext NTMMTA: Err Msg: &quot;No Answer&quot; Using NULLMODM Script"
permalink: /kb/143/Q143000/
---

## Q143000: PC Ext NTMMTA: Err Msg: &quot;No Answer&quot; Using NULLMODM Script

	Article: Q143000
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5; WINDOWS:3.0a,3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	- Microsoft Mail for PC Networks, versions 3.0a, 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a null modem cable and the NULLMODM script to connect postoffices
	using the Windows NT Mail Message Transfer Agent (MMTA) or the Mail Transfer
	Agent (EXTERNAL.EXE), the receiving postoffice may not see a call request from
	the serial port.
	
	The sending postoffice may display an error on the screen and in the SESSION.LOG
	file similar to the following, if the LogSession or -L command line option is
	invoked:
	
	  Async1 12-07-94 17:47 >>> NO ANSWER <<<
	
	CAUSE
	=====
	
	The baud rate may not be set after the RESET or DISCONNECT procedures in the
	script file are executed.
	
	RESOLUTION
	==========
	
	To ensure that the serial port connected to the null modem cable is always set
	to the desired baud rate, edit the NULLMODM.MDM file in the GLB directory on
	your postoffice, and insert the baud command as shown below:
	
	INITIALIZE:
	
	  title "Null Modem" 
	  baud 9600 
	  return 0 
	
	
	RESET:
	
	  baud 9600 
	  return 0
	
	
	DISCONNECT:
	
	  dtr 0                  ; drop DTR signal for a few seconds
	
	
	       clearrsp               ; clear the response buffer
	       wait 4                 ; give other side time to recognize lost
	                              ; carrier
	       dtr 1                  ; raise it back again
	
	
	  baud 9600
	  return 0
	
	Once the baud command is inserted and the file is saved to disk, you will need to
	run the Script Compiler program, SCRCOMP.EXE, to compile the script and create a
	.SCR file.
	
	Notes:
	
	- If you need to adjust the baud rate, be sure that the baud rate is the same
	  in all three sections (above) of the NULLMODM.MDM file. The NULLMODM script
	  is not installed by default.
	
	- For instructions on how to install the NULLMODM script, refer to the
	  README.TXT file on the Supplementary Modem Scripts disk.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q126650 Using Null Modem Script at Higher Baud Rates Than 9600
	
	  Q80261 Contents of Modem Script File NULLMODM.MDM
	
	For additional information about script files, refer to Appendix E "Script Files"
	in the Microsoft Mail for PC Networks "Administrator's Guide."
	
	Additional query words: 3.50 3.00a 3.20 3.20a nullmodem direct via
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300a kbMailPCN350 kbMailMMTA350NT
	Version           : :3.5; WINDOWS:3.0a,3.2,3.2a,3.5
	
	=============================================================================
	
