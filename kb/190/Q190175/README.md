---
layout: page
title: "Q190175: BUG: MTS is Unable to Delete VB6 Project Compatible Server"
permalink: /kb/190/Q190175/
---

## Q190175: BUG: MTS is Unable to Delete VB6 Project Compatible Server

{% raw %}

	Article: Q190175
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCompiler kbMTSExplorer kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Visual Basic ActiveX component is added to Microsoft Transaction Server
	(MTS) Explorer, and then the project name is changed and the project is
	recompiled with Binary Compatibility or Project Compatibility, MTS marks the
	component as <invalid>.
	
	At this point, trying to delete the component in MTS Explorer fails with the
	following error message:
	
	  An error occurred accessing components in the System package on this
	  computer. Error code was 80004005, Make sure that: + Microsoft Transaction
	  Server was installed correctly. + If you have set a specific identity for the
	  system package, the user account and password are correct.
	
	CAUSE
	=====
	
	In Visual Basic, setting Project Compatibility does not change the CLSIDs,
	specifically the CoClass GUID. Only the IID changes. This is a change from
	Visual Basic 5.0 where the CLSID did change.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new ActiveX DLL project in Visual Basic.
	
	2. Select Project Properties from the Project menu, and change the Project Name
	  to PLC1.
	
	3. Select Make PLC1.dll from the File menu.
	
	4. In MTS Explorer, highlight "Packages Installed" and select New from the File
	  menu. Click the icon to create an empty package and name it MyPackage.
	
	5. Click Next, and then Finish.
	
	6. Expand "Packages Installed" and then MyPackage, highlight Components and
	  select New from the File menu. Click the icon to import components that are
	  already registered. Select PLC1.Class1 from the list and click Finish.
	  PLC1.Class1 is now added to MyPackage.
	
	7. In Visual Basic, select PLC1 Properties from the Project menu, and choose the
	  Component tab. Set Version Compatibility to Binary Compatibility with
	  PLC1.dll.
	
	8. Choose the General tab, and change the Project Name to PLC2.
	
	9. From the File menu, select Make PLC1.DLL to compile again and replace the
	  existing DLL. A message box regarding incompatibility will be received.
	
	10. Press OK and Continue to accept the Incompatibility message.
	
	11. Return to MTS Explorer, highlight the package containing PLC1 component, and
	  select Refresh under the View menu. An error is received informing you that
	  the Component's ProgID is invalid. After pressing OK the Component becomes
	  <Invalid>.
	
	12. Try to delete the <Invalid> component from the package. The error
	  mentioned in the Symptoms section above occurs and the component does not
	  get deleted.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCompiler kbMTSExplorer kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
