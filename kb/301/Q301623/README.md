---
layout: page
title: "Q301623: IIS5: BOM of UTF-8 Encoded Files Is Treated as Data"
permalink: kb/301/Q301623/
---

## Q301623: IIS5: BOM of UTF-8 Encoded Files Is Treated as Data

	Article: Q301623
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbWin2000PreSP3Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A file that is saved in UTF-8 encoding usually has a byte-order mark (BOM) at
	the beginning of the file. IIS treats the three BOM bytes (EF, BB, and BF) as
	part of the data, which may cause various errors.
	
	For instance, the following Microsoft Visual Basic script saved in UTF-8 encoding
	causes a "Statement expected" error on the "Option explicit" line to occur.
	Because of the BOM, the VB script engine is unable to parse the code.
	
	  <%@ Language=VBScript CODEPAGE=65001%><%
	  Option explicit
	  ......
	
	IIS should remove the BOM before processing the data.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows 2000 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date          Time    Version         Size      File name
	  ------------------------------------------------------------
	  20-Jun-2001   17:59   5.0.2195.3763   332,560   Asp.dll
	  29-May-2001   10:04   5.0.2195.3649   299,792   Fscfg.dll
	  29-May-2001   10:02   5.0.2195.3649     8,464   Ftpctrs2.dll
	  29-May-2001    8:22   5.0.2195.3649     6,416   Ftpmib.dll
	  29-May-2001   10:02   5.0.2195.3649     9,488   Httpmib.dll
	  29-May-2001   10:02   5.0.2195.3649    13,584   Infoadmn.dll
	  29-May-2001   10:02   5.0.2195.3649   245,520   Infocomm.dll
	  29-May-2001   10:02   5.0.2195.3649    62,736   Isatq.dll
	  29-May-2001   10:02   5.0.2195.3649     7,440   W3ctrs.dll
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	5.0.
	
	MORE INFORMATION
	================
	
	For additional information on how to install Windows 2000 and Windows 2000
	hotfixes at the same time, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q249149 Installing Microsoft Windows 2000 and Windows 2000 Hotfixes
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWin2000PreSP3Fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
