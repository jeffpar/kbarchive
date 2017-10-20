---
layout: page
title: "Q288270: ASP Returns Continuous &quot;Include File Not Found&quot; Errors"
permalink: /kb/288/Q288270/
---

## Q288270: ASP Returns Continuous &quot;Include File Not Found&quot; Errors

{% raw %}

	Article: Q288270
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbDSupport kbCOMIS kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open and read an include file, Active Server Pages (ASP) may return the
	"Include file not found" error message continually, even though the file exists,
	and the condition that caused the error no longer exists.
	
	CAUSE
	=====
	
	This problem occurs because the file handle is never closed when the error
	occurs, and the next attempt to use that handle results in an error. This
	problem has only been reported when the content is on a Universal Naming
	Convention (UNC) share.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of the Internet Information Services (IIS) 5.0 fix should
	have the following file attributes or later:
	
	Date        Time     Version         Size       File name    Platform
	-------------------------------------------------------------------------
	3/14/2001   11:25a   5.0.2195.3371   332,560   Asp.dll       x86
	3/14/2001   11:25a   5.0.2195.3280    13,584   Infoadmn.dll  x86
	3/14/2001   11:25a   5.0.2195.3280   245,520   Infocomm.dll  x86
	3/14/2001   11:25a   5.0.2195.3280    62,736   Isatq.dll
	3/14/2001   11:25a   5.0.2195.3280      7440   W3ctrs.dll 
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 3.
	
	Additional query words: kbIISCom
	
	======================================================================
	Keywords          : kbDSupport kbCOMIS kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
