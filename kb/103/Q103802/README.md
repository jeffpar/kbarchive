---
layout: page
title: "Q103802: MHS: How to Test Whether the Gateway Is Working"
permalink: /kb/103/Q103802/
---

## Q103802: MHS: How to Test Whether the Gateway Is Working

	Article: Q103802
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	-------------------------------------------------------------------------------
	
	After you set up version 3.0 of the Microsoft Mail Gateway to MHS, the
	easiest way to test it is to address a message to yourself from Microsoft
	Mail, looping the message through MHS and back to yourself.
	
	The message is routed through this path:
	
	  MS Mail user >
	
	    MS Mail Database >
	      MHS Gateway >
	        MHS Routes the message >
	          MHS Gateway >
	            MS Mail Database >
	              MS Mail User
	
	To address the message from the Windows client
	----------------------------------------------
	
	1. From within the Mail client, choose the Compose button.
	
	2. On the To: line, type the following address
	
	  " [MHS:ADMIN@MSMAIL]" (without the quotation marks)
	
	  where:
	
	     Square brackets   Tells Mail that this address is not contained
	                       within one of its address lists
	
	     MHS:              Tells Mail this message should be sent out
	                       through the MHS gateway
	
	     ADMIN             Your Microsoft Mail mailbox ID
	
	     MSMAIL            The name of the gateway host, in MHS
	
	To address the message from the MS-DOS client
	---------------------------------------------
	
	1. From within Mail, select Compose. Your default address view appears.
	
	2. Press the LEFT ARROW key to see all the other address lists.
	
	3. Select the MHS list. A blank address box or a list of addresses appears.
	
	  NOTE: Addresses displayed here are the ones entered into the postoffice using
	  the ADMIN.EXE or IMPORT.EXE utility.
	
	4. Press the INSERT key to bring up the new address box.
	
	5. If your gateway in MHS has been defined as MSMAIL and your Microsoft mailbox
	  ID is Admin, type in the address ADMIN@MSMAIL.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
