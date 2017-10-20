---
layout: page
title: "Q128469: PROFS: Err Msg: PWAMROUT Novalue Error in Line 222"
permalink: /kb/128/Q128469/
---

## Q128469: PROFS: Err Msg: PWAMROUT Novalue Error in Line 222

{% raw %}

	Article: Q128469
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.4a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.4a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The following error message is displayed on the MS-GATE PROFS Host Access
	Component:
	
	  PWAMROUT novalue error in line 222
	
	CAUSE
	=====
	
	In the PWAMROUT CEXEC, line 222 contains an invalid Interpret command.
	
	RESOLUTION
	==========
	
	In line 222 of the PWAMROUT CEXEC, change the following statement
	
	     Interpret 'sub = ' ' '"'Recurring_Txt.Default_Lang || Sub '"'
	
	  to:
	
	     sub = Recurring_Txt.Default_Lang Sub
	
	Although in theory these two statements should produce the same results, in
	practice the first one produces a "No Value" error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.4a of Microsoft Mail
	Gateway to PROFS. This problem was corrected in PWAMROUT.CEX version 3.4a.041.
	If you do not have version 34a.041, you can find PWAMROUT.EXE, a self-extracting
	file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile "PWAMROUT.EXE" (without the quotation marks), and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get PWAMROUT.EXE
	
	- The Microsoft Network
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download PWAMROUT.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	Additional query words: 3.40a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS340a
	Version           : :3.4a
	
	=============================================================================
	

{% endraw %}
