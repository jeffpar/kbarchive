---
layout: page
title: "Q192497: SMS: Custom MIF Has Incorrect Format or Illegal Values for Time"
permalink: /kb/192/Q192497/
---

## Q192497: SMS: Custom MIF Has Incorrect Format or Illegal Values for Time

	Article: Q192497
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Mifcheck utility to check the validity of a Custom MIF you may
	receive an error message similar to the following:
	
	  Time has incorrect format or illegal values, on line number #, token '0'
	
	One example:
	
	  Error in file test.mif
	  Time has incorrect format or illegal values, on line 12, token '0'
	
	WORKAROUND
	==========
	
	To avoid this error, edit the Custom MIF and surround the Date/Time value with
	quotation marks, as in this example:
	
	     Start Component
	       Name = "Workstation Configuration"
	       Start Group
	         Name = "Installation Information"
	         ID = 1
	         Class = "Microsoft Corp.|Installation Information|1.0"
	         Start Attribute
	           Name = "Installation Date"
	           ID = 1
	           Type = Date
	           Storage = Specific
	           Value = "07/01/98 10:30:30"
	
	REFERENCES
	==========
	
	For additional information about using the Mifcheck utility, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q168724 SMS: List of Tools Available on the SMS 1.2 Compact Disc
	
	For additional information about restrictions on the Data type refer to the
	"Microsoft Systems Management Server 1.2 Resource Guide," Chapter 4: File
	Formats, pages 221-222.
	
	Additional query words: prodsms badmif
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	
