---
layout: page
title: "Q281837: INFO: COM EXE Servers Run in SYSTEM Context When Called from IIS"
permalink: /kb/281/Q281837/
---

## Q281837: INFO: COM EXE Servers Run in SYSTEM Context When Called from IIS

{% raw %}

	Article: Q281837
	Product(s): Internet Information Server
	Version(s): 4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP7
	Operating System(s): 
	Keyword(s): kbDSupport kbIIS
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP7, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A COM object that is hosted in a separate EXE that is marked to run as the
	launching user will run in the security context of SYSTEM when it is called from
	an Active Server Pages (ASP) page that is running in an in-process application
	in Internet Information Server (IIS). This is because the Inetinfo process runs
	in the SYSTEM context. COM objects that are running in a separate EXE that is
	marked to run as the launching user get started with the security context of the
	caller's process token, not the thread token. Therefore, for IIS in-process
	applications, this will be the SYSTEM context.
	
	Additionally, script authors can use a script engine's "CreateObject" method
	directly to launch a COM object, bypassing ASP's built-in checks for COM objects
	that are hosted out-of-process.
	
	MORE INFORMATION
	================
	
	System administrators can take these steps to tighten security:
	
	- Configure the IIS site or application to run in a separate process. To do
	  this:
	
	  1. Open Properties for the Web site or virtual directory application, and
	     then click the Home Directory tab.
	
	  2. Select Run in separate memory space (isolated process).
	
	  3. Click ok.
	
	  If you intend to call out-of-process COM objects from this application, you
	  may have to configure the object's security in the Distributed COM
	  Configuration Properties application (DCOMCNFG). For additional information,
	  click the article number below to view the article in the Microsoft Knowledge
	  Base:
	
	  Q198432 PRB: Server Object Error 'ASP 0178' Instantiating COM Object
	
	- Use DCOMCNFG to limit access to COM objects. To do this:
	
	  1. Point to Start, click Run, and then type "DCOMCNFG" (without the quotation
	     marks). Press enter.
	
	  2. Click the Applications tab, which contains a list of the COM objects
	     organized by either name or CLSID. Find the appropriate object, select it,
	     and click Properties.
	
	  3. Click the Security tab. Select Use custom access permissions. Click Edit.
	
	  4. Remove the users who should not have access to this object. For example,
	     SYSTEM, INTERACTIVE, EVERYONE, IUSR_<COMPUTER NAME>,
	     IWAM_<COMPUTER NAME>. Click ok.
	
	  5. Select Use custom launch permissions, and then click Edit. Remove the same
	     users as previously.
	
	  NOTE: regardless of the settings on the COM object, the EXE will still start,
	  although COM will return an "access denied" error message, and no methods may
	  be called. The EXE is started, however, and remains in memory. This is a
	  behavior of COM.
	
	  For additional information on using DCOMCNFG, click the article numbers below
	  to view the articles in the Microsoft Knowledge Base:
	
	  Q176799 INFO: Using DCOM Config (DCOMCNFG.EXE) on Windows NT
	
	  Q246054 INFO: DCOMCNFG and AppID\.exe Mapping and Implications
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbIIS 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch kbiisSearch kbiis400 kbNTTermServ400SP7
	Version           : :4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP7
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
