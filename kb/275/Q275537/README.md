---
layout: page
title: "Q275537: Certificate Object GetMapping Call Fails"
permalink: kb/275/Q275537/
---

## Q275537: Certificate Object GetMapping Call Fails

	Article: Q275537
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbWin2000PreSP2Fix kbWin2000SP2Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you call the GetMapping method in an IIsCertMapper object o enumerate
	client mapping certificates, you cannot return more than nine objects. The error
	code returned is -2147024893 (80070003 "The system cannot find the path
	specified").
	
	CAUSE
	=====
	
	The path to a client certificate is incorrectly calculated.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT service pack that contains this fix.
	
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
	
	The English version of the IIS 4.0 fix should have the following file attributes
	or later:
	
	  Date      Time    Version      Size    File name     Platform
	  -------------------------------------------------------------
	  10/04/2000  00:03 4.2.752.1     330,080  Asp.dll         x86 
	  10/04/2000  00:02 4.2.752.1      55,904  Httpodbc.dll    x86 
	  10/04/2000  00:03 4.2.752.1      98,912  Iischema.dll    x86 
	  10/03/2000  23:13                28,851  Iiscnfg.h
	  10/04/2000  00:01 4.2.752.1     185,792  Infocomm.dll    x86 
	  10/04/2000  00:02 4.2.752.1      38,256  Ssinc.dll       x86 
	  10/04/2000  00:02 4.2.752.1      25,360  Sspifilt.dll    x86 
	  10/04/2000  00:02 4.2.752.1     229,008  W3svc.dll       x86 
	  10/04/2000  12:03 4.2.752.1     214,544  Adsiis.dll      x86
	  10/03/2000  11:14                 6,280  Adsiis.tlb
	
	
	The English version of the IIS 5.0 fix should have the following file attributes
	or later:
	
	  Date      Time    Version      Size    File name     Platform
	  -------------------------------------------------------------
	  10/04/2000  14:35 5.0.2195.24    42,768  Iisext.dll      x86 
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0
	and Internet Information Services 5.0. This problem was first corrected in
	Windows 2000 Service Pack 2.
	
	MORE INFORMATION
	================
	
	The Windows 2000 hotfix package is Q275537_W2K_SP2_x86_en.exe.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWin2000PreSP2Fix kbWin2000SP2Fix 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
