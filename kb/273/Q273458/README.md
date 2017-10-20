---
layout: page
title: "Q273458: BUG: Cannot Find Installable ISAM ErrMsg After Localized VS SP4"
permalink: /kb/273/Q273458/
---

## Q273458: BUG: Cannot Find Installable ISAM ErrMsg After Localized VS SP4

{% raw %}

	Article: Q273458
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0,6.0 SP4
	Operating System(s): 
	Keyword(s): kbVBp600 kbGrpDSVB kbDSupport kbVS600sp4bug kbVS600sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Studio 6.0 SP4, used with:
	   - Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	   - Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual Basic 6.0, with the Visual Studio 6.0 Service Pack 4 (SP4) installed,
	if you compile and run a localized program that contains an intrinsic Data
	control with the DatabaseName property set to a Microsoft Access 2000 database,
	the following error message appears:
	
	  Cannot Find Installable ISAM
	
	The problem does not occur inside the integrated development environment (IDE).
	
	This problem only applies to non-English versions of Microsoft Windows and Visual
	Basic. There are many other possible causes for this error. For additional
	information, click the article numbers below to view the articles in the
	Microsoft Knowledge Base:
	
	  Q209805 ACC2000: Could Not Find Installable ISAM Error Message
	
	  Q257819 HOWTO: Use ADO and ADOX with Excel Data from Visual Basic
	
	CAUSE
	=====
	
	Visual Studio 6.0 SP4 did not ship the DLLs that contain the localized resources
	for Microsoft Access 2000 (for example, vb6it.dll for Italian). As a
	consequence, the compiled localized program loads the Visual Studio Service Pack
	3 (SP3) version of these DLLs and throws the error message in the "Symptoms"
	section.
	
	The program works properly in the IDE, because the IDE (VB6.exe) uses a localized
	VB6IDE.dll, which was included in Visual Studio 6.0 SP4.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug has been fixed in Microsoft Visual Studio 6.0 Service Pack 5 (SP5).
	
	To download service pack 5, see the Visual Studio Product Updates page on the
	following Microsoft Web site at:
	
	  http://support.microsoft.com/support/servicepacks/VS/6.0/default.asp?sd=msdn
	
	Additional query words: vb6it VB6 VB6IDE
	
	======================================================================
	Keywords          : kbVBp600 kbGrpDSVB kbDSupport kbVS600sp4bug kbVS600sp5fix 
	Technology        : kbVSsearch kbAudDeveloper
	Version           : :6.0,6.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
