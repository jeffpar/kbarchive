---
layout: page
title: "Q160776: SMS: Inventory Processor Fails on RAW to MIF Conversion"
permalink: /kb/160/Q160776/
---

## Q160776: SMS: Inventory Processor Fails on RAW to MIF Conversion

	Article: Q160776
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbInventory kbsmsUtil smsinv smsutil
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Machine inventory records do not receive updates in the Systems Management
	Server database. You may be notice this problem after recently distributing a
	custom MIF form to clients.
	
	This problem can also be verified by examining the Invproc.log file, located in
	the Logs directory of the client's site server. A "Compilation failed" entry
	appears immediately after "Processing Machine ISV MIF Files."
	
	CAUSE
	=====
	
	The Systems Management Server Inventory Processor is rejecting RAW files because
	one or more custom MIF attribute names contains a trailing space. This is
	generally caused when you generate the custom MIF form with the Systems
	Management Server MIF Form Generator (MIFGEN), and a space is accidentally added
	to the end of a field name.
	
	You can check whether there is a trailing space character by examining the custom
	MIF file that is output by the MIF Entry Form (MIFWIN). The following sample
	section of a custom MIF output contains a space after the PC Asset Number, and
	would therefore cause the Inventory Processor to fail compilation:
	
	     Start Attribute
	           Name = "PC Asset Number "
	           ID = 1
	           Type = String(35)
	           Storage = Specific
	           Value = "2485798"
	     End Attribute
	
	Other problems with a MIF that will cause a Compilation Failed error include
	having any field name, data or text, that contains a " (quotation mark symbol).
	This will cause INVPROC to produce a "Compilation failed" also.
	
	
	WORKAROUND
	==========
	
	To work around this problem, use the following steps:
	
	1. Reload the custom MIF form into the MIFGEN utility.
	
	2. Edit the offending field identified as having trailing spaces in the MIF,
	  typing the item name again, with no trailing space.
	
	3. As a test, place the XNF file in the Ms\Sms\Bin directory of a client. Remove
	  the .sev and .mif files from the Noidmifs directory for the XNF name (if the
	  XNF file was previously distributed to the client).
	
	4. Before redistributing the XNF file to clients, or as part of the distribution
	  process, you must remove the .sev and .mif files for the named XNF from the
	  client's Noidmifs directory. Failure to do so will produce a "Form template
	  file is corrupted" error message from MIFWIN on the client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server versions 1.0, 1.1, and 1.2. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1.00 1.10 1.20 prodsms compilation
	
	======================================================================
	Keywords          : kbInventory kbsmsUtil smsinv smsutil 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
