---
layout: page
title: "Q196433: XADM: Cannot Change IMC Conversion Method on Custom Recipient"
permalink: kb/196/Q196433/
---

## Q196433: XADM: Cannot Change IMC Conversion Method on Custom Recipient

	Article: Q196433
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): kbExchange500preSP3fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you select the "Override Internet Mail Service settings for this recipient"
	check box on the Advanced tab in the properties for a custom recipient's SMTP
	address, modify the default settings under Message Format, and then attempt to
	save the changes by clicking OK twice, it may appear that the changes are not
	saved. If you view the Advanced tab again, the default settings are displayed.
	Note that this problem only occurs with custom recipients that are created for
	Internet addresses.
	
	CAUSE
	=====
	
	The Exchange Server Administrator program is always displaying the default
	values whatever the values read from the directory.
	
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Microsoft
	Exchange Server version 5.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Administrator Program
	
	  File Name    Version
	  ------------------------
	  Admin.exe    5.0.1461.79
	  Madmsg.dll   5.0.1461.79
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, use the Exchange Server 5.5 Administrator program
	to display the real values.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	======================================================================
	Keywords          : kbExchange500preSP3fix 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
