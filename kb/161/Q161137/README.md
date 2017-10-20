---
layout: page
title: "Q161137: HOWTO: Use Project and Binary Compatibility"
permalink: /kb/161/Q161137/
---

## Q161137: HOWTO: Use Project and Binary Compatibility

{% raw %}

	Article: Q161137
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbusage kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Compatibility setting allows you to determine the Visual Basic project's
	compatibility to older versions of the ActiveX Components generated from the
	project.
	
	The ActiveX Components you create contain a default interface (for example,
	CName_D where CName is the ClassName for the ActiveX Component) that contains
	all of the methods and properties you have created. If your Class raises events,
	you also have an additional interface called IConnectionPointContainer. When you
	build an ActiveX Control or Server, these Interfaces are given a unique
	identifier. If you modify your control or server, these interfaces may change.
	Any applications using an older version of your component may fail at this
	point. To ensure that your new and old interfaces will work with all
	applications, you need to set the appropriate Compatibility setting.
	
	MORE INFORMATION
	================
	
	You can set the Project's Compatibility in the Project\Properties dialog box,
	under the Component tab.
	
	Visual Basic has three different compatibility settings for Projects:
	
	- No compatibility.
	
	- Project compatibility.
	
	- Binary compatibility.
	
	No Compatibility
	----------------
	
	With this setting, no compatibility is enforced. Visual Basic creates new
	Interface IDs and Class IDs every time you build or compile your project. Each
	version built can only be used with applications created to work with that
	specific build of the component.
	
	Project Compatibility
	---------------------
	
	With this setting, you can make your project compatible to a specific component
	project. While new type library information is generated, the type library
	identifier is maintained so that test projects can still refer to the component
	project. This setting is for maintaining compatibility during testing.
	Therefore, once the component is released, it behaves the same as the No
	Compatibility setting.
	
	Binary Compatibility
	--------------------
	
	When you compile your project, Visual Basic only creates new Class and Interface
	IDs when necessary. It preserves the class and interface IDs from the previous
	version(s) so that programs compiled using an earlier version will continue to
	work. If you are making a change that will result in an incompatible version,
	Visual Basic will warn you. If you want to maintain compatibility with older,
	released versions of an ActiveX component, this is the setting you need to use.
	
	REFERENCES
	==========
	
	Visual Basic 5.0 Components Guide, Chapter 7, "Debugging, Testing, and Deploying
	Components"
	
	Additional query words: kbNoKeyword
	
	======================================================================
	Keywords          : kbusage kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
