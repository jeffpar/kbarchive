---
layout: page
title: "Q260172: FIX: MFC ISAPI Parse Functions Fail Under Stress on Multiple-CPU"
permalink: /kb/260/Q260172/
---

## Q260172: FIX: MFC ISAPI Parse Functions Fail Under Stress on Multiple-CPU

{% raw %}

	Article: Q260172
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbMFC kbVC kbVC500bug kbVC600bug kbDSupport kbVS600sp4fix kbVS600sp5fix
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- The Microsoft Foundation Classes (MFC) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Parameters passed to an MFC Internet Server Application Programming Interface
	(ISAPI) .dll file can be corrupted in some cases where the .dll is called
	simultaneously by a large number of clients on a multiple-processor computer.
	
	CAUSE
	=====
	
	This was caused by code that was storing temporary data in the parse map entry
	itself while parsing for parameters in CHttpServer::PushDefaultStackArgs.
	
	RESOLUTION
	==========
	
	The code was changed to allocate a temporary buffer instead of storing the parse
	map entries in the parse map.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the latest service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use the following ISAPI code on a dual-CPU computer (the problem may also
	  occur on a single-CPU computer but is less noticeable):
	
	  BEGIN_PARSE_MAP(CBugTestExtension, CHttpServer)
	  	// TODO: insert your ON_PARSE_COMMAND() and 
	  	// ON_PARSE_COMMAND_PARAMS() here to hook up your commands.
	  	// For example:
	
	  	DEFAULT_PARSE_COMMAND(Default, CBugTestExtension)
	
	  	ON_PARSE_COMMAND(Default, CBugTestExtension, ITS_PSTR)
	  	ON_PARSE_COMMAND_PARAMS ("param")
	  	
	  END_PARSE_MAP(CBugTestExtension)
	
	  void CBugTestExtension::Default(CHttpServerContext* pCtxt, LPTSTR lpStr)
	  {
	  	StartContent(pCtxt);
	  	WriteTitle(pCtxt);
	
	  	if ((DWORD) lpStr == 0xcdcdcdcd)
	  	{
	  		ISAPITRACE ("Error!!!");
	  		DebugBreak();
	  	}
	
	  	*pCtxt << _T("This default message was produced by the Internet");
	  	*pCtxt << _T(" Server DLL Wizard. Edit your CBugTestExtension::Default()");
	  	*pCtxt << _T(" implementation to change it.\r\n");
	
	  	EndContent(pCtxt);
	  }
	
	2. Install the Microsoft Web Application Stress Tool on at least two clients.
	  You can get it from the following Microsoft Web site:
	
	  http://homer.rte.microsoft.com/
	
	3. Configure and perform the following stress test:
	
	  GET /scripts/bugtest/debug/bugtest.dll?DEFAULT?param=Hello
	  Number of Thread: 10
	  Number of sockets: 10
	
	  Use at least two client computers.
	
	4. Start Visual C++ and attach it to Inetinfo.exe. (Make sure that you have a
	  debug build of the ISAPI .dll file.)
	
	5. Set the break point on this line:
	
	  ISAPITRACE ("Error!!!");
	
	  Observe how occasionally lpStr points to an invalid memory location.
	
	Here is the stack trace, which clearly indicates corrupted parameters in the
	Default function:
	
	  CBugTestExtension::Default(CHttpServerContext * 0x01d1fb9c, char * 0xcdcdcdcd) line 77
	  _AfxParseCall(void (CHttpServerContext *)* 0x01d1fb9c, void (CHttpServerContext *)* 0x01d1fb9c, void (CHttpServerContext *)* 0x01d1fb9c) line 46
	  CHttpServer::CallFunction(CHttpServerContext * 0x01d1fb9c, char * 0x000ff485, char * 0x00000000) line 921 + 24 bytes
	  CHttpServer::HttpExtensionProc(_EXTENSION_CONTROL_BLOCK * 0x000ff2f0) line 462 + 35 bytes
	  HttpExtensionProc(_EXTENSION_CONTROL_BLOCK * 0x000ff2f0) line 159 + 20 bytes
	  WAM! 68891807()
	  WAM! 6889128d()
	  W3SVC! 68c053de()
	  W3SVC! 68c052c1()
	  W3SVC! 68c0523d()
	  W3SVC! 68c051a7()
	  W3SVC! 68c01d3c()
	  W3SVC! 68c01769()
	  W3SVC! 68c046ea()
	  W3SVC! 68c04689()
	  ISATQ! 6862132b()
	  ISATQ! 68622676()
	  KERNEL32! 77f04ee8()
	
	REFERENCES
	==========
	
	See the following topics in the MSDN library:
	
	  CHttpServer
	  ON_PARSE_COMMAND_PARAMS()
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbMFC kbVC kbVC500bug kbVC600bug kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVCsearch kbAudDeveloper kbMFC kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
