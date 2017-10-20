---
layout: page
title: "Q180533: HTMLA: Host Header Name Information Not Kept in New Web Site"
permalink: /kb/180/Q180533/
---

## Q180533: HTMLA: Host Header Name Information Not Kept in New Web Site

{% raw %}

	Article: Q180533
	Product(s): Internet Information Server
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to create a Virtual Web Server on a computer running Microsoft
	Internet Information Server (IIS) version 4.0, using the Internet Service
	Manager (HTML), the interface indicates that the information was saved with no
	error, but when you try to start the Web, the following error message appears:
	
	  The service could not be started because it is not correctly
	  configured. Make sure its server bindings do not conflict
	  with other servers running on the same machine. (-2147023843-).
	
	or a shorter message saying there is a problem with bindings.
	
	CAUSE
	=====
	
	The above message indicates that this Web's definitions conflict with those of
	an already existing Web. Analysis shows that the Host Header Name field is now
	empty, even though the information was saved in an earlier step.
	
	When you use the Microsoft Management Console-based Internet Service Manager
	(ISM), this same procedure works fine. The Host Header name entered using this
	tool works fine.
	
	WORKAROUND
	==========
	
	To work around this problem, use the Microsoft Management Console-based ISM,
	which does not exhibit this problem.
	
	RESOLUTION
	==========
	
	If your client connection is exhibiting any of these types of behavior, please
	obtain the following fix or wait for the next Windows NT service pack.
	
	This fix should have the following time stamp:
	
	  IIS 4.0
	  02/06/98 12:38p      14,495   Iivs.asp (Intel)
	  02/06/98 12:38p      8,727    Iimltihd (Intel)
	
	After you apply the fix, shut down your system properly and restart it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 4.0. A supported fix is now available, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix.
	
	Please contact Microsoft Technical Support for more information.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbiisSearch kbiis400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
