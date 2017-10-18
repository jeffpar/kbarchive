---
layout: page
title: "Q256149: Memory Leak Using Multiple Threads to Call CoGetClassObject()"
permalink: kb/256/Q256149/
---

## Q256149: Memory Leak Using Multiple Threads to Call CoGetClassObject()

	Article: Q256149
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a program is running on Windows NT and multiple threads concurrently call
	CoGetClassObject for an object that is located on a remote computer but the
	COSERVERINFO value is not supplied (the remote computer name must be read from
	the registry), one of the following three error messages may be displayed:
	
	  0x80041054: Class not registered
	  0x800706BA: The RPC server is unavailable
	  0x80070005: Access is denied
	
	CAUSE
	=====
	
	This behavior occurs when the RemoteServerName data is placed into a buffer from
	the registry. The buffer is then deleted; by the next time the information is
	read from the registry by another thread, it is no longer present. If the
	previous thread uses the buffer (assuming that the name is valid) after the
	second thread has deleted it, the RemoteServerName data is invalid.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem. This fix may receive
	additional testing. Therefore, if you are not severely affected by this problem,
	Microsoft recommends that you wait for the next Windows NT 4.0 service pack that
	contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The typical support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English-language version of this fix for Windows NT Server should have the
	following file attributes or later:
	
	  Date        Time   Size     File name     Platform
	  --------------------------------------------------
	  03/14/2000  18:00  105 KB   Rpcss.exe     Intel
	  03/14/2000  18:00  179 KB   Rpcss.exe     Alpha
	
	The English-language version of this fix for Windows NT Server Terminal Server
	Edition should have the following file attributes or later:
	
	  Date        Time   Version           Size     File name
	  -------------------------------------------------------
	  09/27/2001  20:17  4.0.1381.33478    701,712  Ole32.dll
	  09/27/2001  20:17  4.0.1381.33478    108,816  Rpcss.exe
	
	
	
	NOTE: This hotfix requires 4.0 SP5 or later for installation and support.
	
	WORKAROUND
	==========
	
	If you supply the remote computer name in the COSERVERINFO value, the problem
	does not occur.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The value for COSERVERINFO can be null, in which case the class object is
	created on the current computer or on the computer specified under the class's
	RemoteServerName key in the registry as according to the interpretation of the
	dwClsCtx parameter. See the CLSCTX documentation on the Microsoft Developer
	Network (MSDN) for details.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
