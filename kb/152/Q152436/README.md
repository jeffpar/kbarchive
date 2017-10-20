---
layout: page
title: "Q152436: XADM: How to Create Exchange Templates"
permalink: /kb/152/Q152436/
---

## Q152436: XADM: How to Create Exchange Templates

{% raw %}

	Article: Q152436
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to create Microsoft Exchange templates and which files
	are needed to create the templates. The files needed are Unicode text file
	(WTX), Compiled WTX/Binary Display Table (BLT), Binary file to process the
	different OP codes (SCR), and help (HLP).
	
	MORE INFORMATION
	================
	
	The WTX file is a plain Unicode text file. To create this text file, use the
	Save As feature in Notepad, and select the Unicode format. This file is similar
	to the old TPL file. Its format allows you to control where the various fields
	are positioned on the screen, as well as the behavior of the input fields, for
	example, default value, read-only, required, etc. All of the op-codes are found
	on the Microsoft Exchange SDK.
	
	For example,
	
	0, 0, 0, 0, DTCT_PAGE, 0x00000000, 0x00000000, 0,MCI User
	12, 50, 20, 8, DTCT_LABEL, 0x00000000, 0x00000000, 0,Alias:
	75, 141, 18, 12, DTCT_EDIT, 0x00000006, 0x3001001E, 30,*
	
	-or-
	
	Once the WTX is complete, you need to compile it with a tool included in the SDK.
	This tool is called Template.exe. It takes the WTX file as input and outputs a
	BLT file.
	
	Now you can verify the location of the different fields by importing the file
	into the one-off address container. Create a CSV similar to this one and use the
	directory import tool to bring it into exchange.
	
	Obj-Class    Mode  Common-Name    Address-Entry-Display-Table   Address-
	Entry-Display-Table-MSDOS   Original-Display-Table  Original-Display-Table-
	MSDOS  Help-File-Name    Help-Data16    Help-Data32    Address-Syntax
	Address-Type    Admin-Display-Name
	
	Address-Template  Create    /cn=Configuration/cn=Addressing/cn=Address-
	Templates/cn=409/cn=MCITelex   =MCITelex.blt  =MCITelex.blt  =MCITelex.blt
	#NAME?             =MCITelex.BIN MCI   MCI Telex Address
	
	After you verify the field positioning, etc., you are now ready to create a
	binary file that will control how the various fields will be processed. The SDK
	suggests using DEBUG for this task. However, Dev Studio is a better choice,
	specially if you plan to make any editing changes. In most cases you take the
	information entered by the user and concatenate it into a single address line.
	
	For example, in Microsoft Mail for PC Networks, you would take the network name,
	postoffice name, and the user ID and concatenate them using '/' to separate the
	various parts of the address. Within this binary file you need to specify an
	offset to locate the various text characters that are inserted when completing
	the address. It is easier to use locate all this type of text fields at the
	beginning of the file instead of at the end, so your offsets do not keep
	changing. In order to make this work you need to put a JMP operand (00 00 00 03)
	as the first instruction and indicate the offset of where the program starts.
	
	If you run debug or Dev Studio, you will notice that the actual program does not
	start until 6A (hex).
	
	  Instructions      Op Code
	  03 00 00 00    00000003 JMP
	  6A 00 00 00    0000006A Offset
	  Text fields ...
	  ...
	  04 00 00 00    00000004 Verify
	  1E 00 00 78    7800001E Field #1 defined on WTX
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
