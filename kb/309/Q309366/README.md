---
layout: page
title: "Q309366: INFO: VB 6.0 Does Not Support Windows XP Themes or Visual Styles"
permalink: /kb/309/Q309366/
---

## Q309366: INFO: VB 6.0 Does Not Support Windows XP Themes or Visual Styles

{% raw %}

	Article: Q309366
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbArtTypeINF
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0, used with:
	   - the operating system: Microsoft Windows XP 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0, used with:
	   - the operating system: Microsoft Windows XP 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows XP provides new themes or visual styles. In Windows XP, you
	can define the visual style or appearance of controls and windows from simple
	colors to textures and shapes.
	
	However, Visual Basic 6.0 does not support themes or visual styles on Windows XP.
	Although you can enable Visual Basic 6.0 applications to support a theme or
	visual style on Windows XP, you may encounter unexpected behavior.
	
	MORE INFORMATION
	================
	
	A visual style is included in the Windows XP release. In addition, other themes
	or visual styles are available in the Windows XP Plus Pack. You can use helper
	libraries and application programming interfaces (APIs) to incorporate a Windows
	XP visual style into an application with few code changes.
	
	Windows XP applies a visual style to the non-client (frame and caption) area by
	default. To apply a visual style to common controls in the client area, you must
	use version 6 or later of the ComCtl32.dll file. ComCtl32.dll version 6 is not a
	redistributable system component. ComCtl32.dll version 6 contains both the user
	controls and the common controls. By default, applications use the controls that
	are defined in the User32.dll file. In addition, applications use the common
	controls that are defined in ComCtl32.dll version 5 by default.
	
	To use the Windows XP visual styles from an application, you must add an
	application manifest file. This application manifest file should specify that
	ComCtl32.dll version 6 be used if it is available. One of the features that is
	included with this component is support for changing the appearance of controls
	in a window.
	
	Therefore, you must follow two steps to enable the Windows XP theme or visual
	style in Visual Basic 6.0:
	
	1. Call the InitCommonControls function
	2. Add an application manifest file
	
	Call the InitCommonControls Function:
	
	You must call the InitCommonControls function in the Form_Initialize event:
	
	  Private Declare Sub InitCommonControls Lib "comctl32.dll" ()
	
	  Private Sub Form_Initialize()
	      InitCommonControls
	  End Sub
	
	NOTE: Do not call InitCommonControls in the Form_Load event. When you call
	InitCommonControls from the Form_Load event, the form cannot load.
	
	Add an Application Manifest File:
	
	You must add a file named <YourApp>.exe.manifest to the same folder as your
	executable file. For example, if your application is named Generic.exe, include
	a manifest file that is named Generic.exe.manifest. The application manifest
	file has Extensible Markup Language (XML) format similar to the following:
	
	  <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
	  <assembly xmlns="urn:schemas-microsoft-com:asm.v1" manifestVersion="1.0">
	  <assemblyIdentity
	      version="1.0.0.0"
	      processorArchitecture="X86"
	      name="CompanyName.ProductName.YourApp"
	      type="win32"
	  />
	  <description>Your application description here.</description>
	  <dependency>
	      <dependentAssembly>
	          <assemblyIdentity
	              type="win32"
	              name="Microsoft.Windows.Common-Controls"
	              version="6.0.0.0"
	              processorArchitecture="X86"
	              publicKeyToken="6595b64144ccf1df"
	              language="*"
	          />
	      </dependentAssembly>
	  </dependency>
	  </assembly>
	
	After you place the application manifest file in the same folder as the
	executable file, you can run the compiled executable file to display the Windows
	XP visual style in the application.
	
	NOTE: You cannot view visual styles when you run the compiled executable from the
	Visual Basic 6.0 Integrated Development Environment (IDE).
	
	Enable a Theme or Visual Style in Visual Basic 6.0 on Windows XP Is Unsupported:
	
	Although you can enable a Windows XP theme or visual style in Visual Basic 6.0 by
	calling InitCommonControls and by using an application manifest file, Microsoft
	does not support this feature.
	
	If you enable a Windows XP theme in Visual Basic 6.0, you may encounter
	unexpected behavior. For example, if you place option buttons on top of a Frame
	control and then enable a Windows XP theme or visual style, the option buttons
	on the Frame control appear as black blocks when you run the executable file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbArtTypeINF 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
