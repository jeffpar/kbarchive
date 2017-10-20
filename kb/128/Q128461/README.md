---
layout: page
title: "Q128461: PROFS: Out-of-Memory Conditions in MS-GATE, MS-CSM, MS-GRF"
permalink: /kb/128/Q128461/
---

## Q128461: PROFS: Out-of-Memory Conditions in MS-GATE, MS-CSM, MS-GRF

{% raw %}

	Article: Q128461
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.4a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.4a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Various out-of-memory conditions occur in MS-GATE, MS-CSM, or MS-GRF.
	
	CAUSE
	=====
	
	When you process large files in MS-GATE, MS-CSM, or MS-GRF, a number of
	conditions can result in which memory is used up.
	
	RESOLUTION
	==========
	
	The PWASETUP EXEC was modified to require less virtual memory to operate on the
	PROFS Host Access MS-GRF component.
	
	You can reconfigure the mainframe side for more virtual memory. However, if you
	have reached the maximum amount of virtual memory you can add to any PROFS Host
	Access component machine (MS-GATE, MS-CSM, or MS-GRF), this component may offer
	a solution to some of the memory constraints.
	
	You can find PWASETUP.EXE,
	(http://support.microsoft.com/download/support/mslfiles/PWASETUP.EXE,) a
	self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile PWASETUP.EXE, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get PWASETUP.EXE
	
	- The Microsoft Network
	
	  On the Edit menu, click Go To, and then click Other Location. Type "mssupport"
	  (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area. Locate and Download PWASETUP.EXE.
	
	
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
