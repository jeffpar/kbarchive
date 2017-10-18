---
layout: page
title: "Q183547: Friendship Tutorial: Runtime Error 1738 Using Playback"
permalink: kb/183/Q183547/
---

## Q183547: Friendship Tutorial: Runtime Error 1738 Using Playback

	Article: Q183547
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 1.0, used with:
	   - Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Friendship Demo while using a Diagnostic Playback Remote
	Environment (RE) and the recording file included with COMTI, the following
	runtime error message may appear:
	
	  (1738) The Method and/or parameters of the request could not be matched in
	  the current recording file.
	
	You will see this error message if your Control Panel settings for Date and
	Currency formats are not the US Default (Currency Decimal Separator ".", and
	Date Format M/d/yy, with Date Separator "/").
	
	CAUSE
	=====
	
	Friendship Demo Visual Basic and ASP code use hard-coded date and currency
	formats, which are converted to actual Dates and Currencies based on the
	Regional Settings in Control Panel for Date and Currency. For example, if your
	Decimal Separator is set to "," then the 150.00 amount will actually be sent to
	COMTI as 15000. This is not what the recording file is expecting.
	
	WORKAROUND
	==========
	
	To work around this problem, you can manually edit the dollar amount and date
	fields when you run the Friendship Demo to match those of your Regional Settings
	via Control Panel. For example, using the Web client, if you use DD/MM/YY for a
	date format, change Service Date from 6/1/89 to 1/6/89 and Date of Birth from
	2/22/48 to 22/2/48.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft COM Transaction
	Integrator for CICS and IMS version 1.0 included with SNA Server version 4.0. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbbug
	
	=============================================================================
	
