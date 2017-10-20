---
layout: page
title: "Q190800: FIX: VC Debugger Fails for WINCE App if Total DLLs Exceed Four"
permalink: /kb/190/Q190800/
---

## Q190800: FIX: VC Debugger Fails for WINCE App if Total DLLs Exceed Four

{% raw %}

	Article: Q190800
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbDebug kbVC500 kbOSWinCE200bug kbOSWinCE210fix
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++ 5.0 
	- Microsoft Windows CE Embedded Toolkit for Visual C++ 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual C++ Debugger fails to start when a Windows CE application uses more
	than four DLLs with debug information. When you start the Debugger with Debug GO
	(F5), F10, or F11, the following type of error message appears for the .exe file
	and each of the DLLs:
	
	  The project '<Host project path >\myapp.exe' does not match the
	  corresponding file on the remote machine.
	
	After clicking all of the OK buttons, the debugger starts in unknown assembly
	code with no call stack information. You have to select Stop debugging from the
	Debug menu.
	
	RESOLUTION
	==========
	
	If you want to debug your application and the DLLs, keep the number of DLLs
	containing debug information to less than five.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in the Microsoft Windows
	CE Toolkit for Visual C++ 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create a simple Windows application or use the Generic sample. Add to this
	application, your DLL projects one at a time. Build the application and the DLLs
	with debug information. The Debugger works fine up to four DLLs. After you add
	the fifth DLL, the symptom described above occurs.
	
	The application might run properly outside the debugger in the Handheld PC device
	if there is no other coding problem. Outside the debugger, the number of DLLs
	you can add to your application is dependent on the available program memory in
	the Handheld PC.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbDebug kbVC500 kbOSWinCE200bug kbOSWinCE210fix 
	Technology        : kbVCsearch kbAudDeveloper kbWinCETKVCSearch kbWinCEETKSearch kbWinCESearch kbWinCETK500VC kbWinCEETKVC500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
