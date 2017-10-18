---
layout: page
title: "Q156845: XCLN: Errors During Load when Compiling Form"
permalink: kb/156/Q156845/
---

## Q156845: XCLN: Errors During Load when Compiling Form

	Article: Q156845
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you compile a Form in the Microsoft Exchange Electronic Form Designer
	(EFD), you might receive errors if you have previously installed the 32 bit
	version of Microsoft Visual Basic 4.0 on your computer.
	
	You might receive the following errors when you install a form if you have
	removed the 32 bit version of Microsoft Visual Basic 4.0 from your computer:
	
	  Errors during load. Refer to 'C:\EXCHANGE\EFDFORMS\SAMPLE.VB\FRMADMIN.LOG'
	  for details.
	
	  Errors during load. Refer to 'C:\EXCHANGE\EFDFORMS\SAMPLE.VB\WINDOW1.LOG' for
	  details.
	
	  License information for this component not found. You do not have an
	  appropriate license to use this functionality in the design environment.
	
	The compilation will stop, the form will not be installed, you must close Visual
	Basic, and you will receive a final error stating:
	
	  An error occurred while compiling the form project.
	
	The form will not be installed, nor will it be compiled correctly.
	
	WORKAROUND
	==========
	
	The compile errors can be corrected by running the EFD Setup program to remove
	it and then re-installing EFD. At this point, you will be able to open the
	existing form project (EFP) and successfully install and compile the form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of Microsoft
	Exchange. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: VB VB4
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
