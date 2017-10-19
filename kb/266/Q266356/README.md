---
layout: page
title: "Q266356: Multiple Calls to AddHeader Cause Heap Corruption in IIS 4.0"
permalink: /kb/266/Q266356/
---

## Q266356: Multiple Calls to AddHeader Cause Heap Corruption in IIS 4.0

	Article: Q266356
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix kbWin2000PreSP3Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Heap corruption may occur in Internet Information Server (IIS) when you call the
	ISAPI AddHeader support function multiple times while processing a single
	request in an ISAPI application.
	
	
	RESOLUTION
	==========
	
	Internet Information Server 4.0
	-------------------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time   Version     Size      File name     Platform
	  -------------------------------------------------------------
	  09-07-2000 06:15p 4.2.751.1   330,080   Asp.dll       x86
	  09-07-2000 06:14p 4.2.751.1   55,904    Httpodbc.dll  x86
	  09-07-2000 06:14p 4.2.751.1   185,792   Infocomm.dll  x86
	  09-07-2000 06:14p 4.2.751.1   38,256    Ssinc.dll     x86
	  09-07-2000 06:15p 4.2.751.1   25,360    Sspifilt.dll  x86
	  09-07-2000 06:15p 4.2.751.1   229,008   W3svc.dll     x86
	
	
	
	Internet Information Server 5.0
	-------------------------------
	
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
	
	  Date        Time     Version        Size      File name
	  --------------------------------------------------------
	 5/31/2001    03:32p   5.0.2195.3649  353,040   W3svc.dll
	
	
	
	STATUS
	======
	
	Internet Information Server 4.0
	-------------------------------
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0.
	
	Internet Information Server 5.0
	-------------------------------
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix kbWin2000PreSP3Fix 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
