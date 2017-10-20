---
layout: page
title: "Q185493: WD97: How to Reset &quot;Always Perform Batch Conversions&quot;"
permalink: /kb/185/Q185493/
---

## Q185493: WD97: How to Reset &quot;Always Perform Batch Conversions&quot;

{% raw %}

	Article: Q185493
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbmacroexample word97
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you use the Microsoft Word Conversion Wizard to convert files, you have the
	option to "always perform batch conversions." If you select this option, the
	next time you run the wizard, you cannot choose "Edit converter or filter
	options."
	
	RESOLUTION
	==========
	
	To reset "Always perform batch conversions" such that the initial dialog box is
	displayed when you run the Conversion Wizard, the Windows 95 registry Conversion
	Wizard entry for the Wizard option of AlwaysBatch must be set equal to No
	instead of Yes.
	
	To reset this value, you can use one of the following methods:
	
	Method 1: Use a Macro to Reset the Value
	----------------------------------------
	
	You can use the following example Visual Basic for Applications macro to reset
	the registry value.
	
	     Sub ResetAlwaysBatch()
	        Dim strKey As String
	        strKey = "HKEY_CURRENT_USER\Software\Microsoft\Office"
	        strKey = strKey & "\8.0\Word\Wizards\Conversion Wizard"
	        System.PrivateProfileString("", strKey, "AlwaysBatch") = "No"
	     End Sub
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	Method 2: Edit the Registry Manually to Reset the Value
	-------------------------------------------------------
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	To modify this setting, follow these steps to make changes in the registry
	itself:
	
	1. On the Windows 95 Start menu, click Run.
	
	2. In the Open text box, type "Regedit" (without the quotation marks) and click
	  OK.
	
	3. Navigate to the following key:
	
	     HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Word\Wizards
	        \Conversion Wizard
	
	4. On the right side of the Registry Editor dialog box, right-click AlwaysBatch
	  and select Modify.
	
	5. In the Value Data box, type "No" (without the quotation marks).
	
	6. Click OK.
	
	7. Exit Registry Editor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta kbmacroexample word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
