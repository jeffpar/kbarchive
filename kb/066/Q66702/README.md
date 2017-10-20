---
layout: page
title: "Q66702: PRB: CV2206 Warning: Corrupt OMF Detected in &lt;filename&gt;"
permalink: /kb/066/Q66702/
---

## Q66702: PRB: CV2206 Warning: Corrupt OMF Detected in &lt;filename&gt;

{% raw %}

	Article: Q66702
	Product(s): Microsoft Programming Utilities
	Version(s): 2.2,3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kberrmsg kb16bitonly kbCodeView kbDebug kbVC kbprb _IK
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 2.2, 3.0, 3.11, 3.14, 4.0, 4.01, 4.05, 4.1 
	- Microsoft CodeView for Windows, versions 3.0, 3.05, 3.06, 3.07, 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to debug, in CodeView source mode, an application developed with the
	Microsoft Macro Assembler (MASM) fails. CodeView generate the following
	message:
	
	  CV2206 Warning: Corrupt debug OMF detected in <filename>, discarding
	  source line information
	
	CAUSE
	=====
	
	Code segments in the application do not have the class "CODE".
	
	RESOLUTION
	==========
	
	Modify the source code to specify the correct segment class and rebuild the
	application.
	
	MORE INFORMATION
	================
	
	According to page 104 of the "Macro Assembler Programmer's Guide" for version
	5.1:
	
	  The CodeView debugger also expects code segments to have the class name
	  'CODE'. If you fail to assign a class type to a code segment, or if you give
	  it a class type other than 'CODE', then labels may not be properly aligned
	  for symbolic debugging.
	
	The following code example demonstrates this situation:
	
	Sample Code
	-----------
	
	  ; Assembler options needed: None
	
	  ; To enable CodeView debugging, add 'CODE' to the following line
	  _text segment para public
	
	  begin    proc
	        mov ah, 4ch
	        int 21h
	  begin    endp
	
	  _text ends
	        end begin
	
	Additional query words: 2.20 3.00 3.50 4.00 4.10
	
	======================================================================
	Keywords          : kberrmsg kb16bitonly kbCodeView kbDebug kbVC kbprb _IK 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView220DOS kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS kbCodeView300 kbCodeView305 kbCodeView306 kbCodeView307 kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :2.2,3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
