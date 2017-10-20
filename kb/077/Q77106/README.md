---
layout: page
title: "Q77106: PC Adm: Connecting Two Postoffices by Using Null Modem"
permalink: /kb/077/Q77106/
---

## Q77106: PC Adm: Connecting Two Postoffices by Using Null Modem

{% raw %}

	Article: Q77106
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e,3.0,3.0b,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1e, 3.0, 3.0b, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By making changes to the Microsoft Mail for PC Networks script files, you can
	configure more than one COM port for an external computer to allow
	communications to another external computer. This will free one COM port for
	modem communications to another postoffice, while a null modem cable can be used
	to connect the two external computers to establish postoffice- to-postoffice
	communications.
	
	The following steps allow two computers, each running the External Mail program,
	to communicate by using a serial null modem connection on COM1, and allow the
	COM2 port of one of the computers running the External Mail program to
	communicate to a remote client or another External Mail program using modem
	communications.
	
	1. Modify the NULLMDM.MDM file and add the text "PORT COM1" (without the
	  quotation marks) to the Initialize, Call, and Answer segments of the script
	  file. Compile the script using the SCRCOMP.EXE utility to create a
	  NULLMDM.SCR compiled script file (for more information, see Appendix N of the
	  Microsoft Mail for PC Networks "Administrator's Guide").
	
	2. Start the Mail Administrator (ADMIN.EXE) program, select External-Admin,
	  Setup, and type "<NULLMDM" in the Phone Number field. This will inform the
	  ADMIN.EXE program that any mail to transfer to the first postoffice (PO1)
	  will travel through the NULLMDM script, which you set to use the COM1 port
	  (in step 1).
	
	3. Choose Config, Serial, and choose COM2 in the Comm. Port field. This informs
	  ADMIN.EXE that communications with the Remote clients will take place through
	  the COM2 port.
	
	4. The External Mail program connected to the second postoffice (PO2) must use
	  the script file that matches the modem type connected to the External Mail
	  program. For example, if the modem type connected to the External Mail
	  program going to PO2 is Hayes V-Series, the EXTERNAL command-line should read
	  as follows:
	
	  external -dmn -tvseries -hm
	
	Additional query words: 2.10e 3.00 3.00b 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN300b kbMailPCN210e
	Version           : WINDOWS:2.1e,3.0,3.0b,3.2,3.2a
	
	=============================================================================
	

{% endraw %}
