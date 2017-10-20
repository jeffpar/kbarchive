---
layout: page
title: "Q290406: Stop 0xC000021A with Custom Gina.dll &amp; WLX_LOGON_OPT_NO_PROFILE"
permalink: /kb/290/Q290406/
---

## Q290406: Stop 0xC000021A with Custom Gina.dll &amp; WLX_LOGON_OPT_NO_PROFILE

{% raw %}

	Article: Q290406
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbfile kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a custom Gina.dll file with the WLX_LOGON_OPT_NO_PROFILE flag, you
	may receive the following error message on a blue screen:
	
	  Stop 0xC000021A (0xfcf67fe8, 0xc0000034, 0x00000000, 0x00000000)
	
	CAUSE
	=====
	
	This problem occurs because Winlogon is referencing a pointer that is not valid.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date        Time    Size     File name     
	  -----------------------------------------
	  03/01/2001  04:20p  343,312  Rpcrt4.dll
	  03/01/2001  08:27p  192,784  Winlogon.exe
	
	NOTE: Due to file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, do not use the WLX_LOGON_OPT_NO_PROFILE flag in
	your custom Gina.dll file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For more information about the WLX_LOGON_OPT_NO_PROFILE flag, search the MSDN
	Web site:
	
	  http://msdn.microsoft.com/default.asp
	
	
	Additional query words: dr watson
	
	======================================================================
	Keywords          : kbenv kberrmsg kbfile kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
