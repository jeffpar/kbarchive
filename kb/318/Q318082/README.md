---
layout: page
title: "Q318082: PRB: Prompt to Check Out Large XSD File When You View the XML"
permalink: /kb/318/Q318082/
---

## Q318082: PRB: Prompt to Check Out Large XSD File When You View the XML

{% raw %}

	Article: Q318082
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbGrpDSSSafe
	Last Modified: 08-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe 6.0c, used with:
	   - Microsoft Visual Studio.NET (2002), Professional Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to view the extensible markup language (XML) source for a large XML
	Schema definition language (XSD) file, and if the solution is under source code
	control, you are prompted to check out the XSD file.
	
	CAUSE
	=====
	
	Visual Studio .NET must check out the file to save information that must be
	written to the XSD file.
	
	RESOLUTION
	==========
	
	Save the file in Visual Studio .NET before you view the source.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ASP.NET Web application.
	
	2. Add the file Tdlschema.xsd to the solution:
	
	  a. In Solution Explorer, right-click the project, click Add, and then click
	     Add existing item.
	
	  b. Browse to and add the following file: C:\Program Files\Microsoft Visual
	     Studio .NET\Common7\Packages\Schemas\xml (default location in the default
	     installation).
	
	3. Add a new schema file to the solution:
	
	  a. In Solution Explorer, right-click the project, click Add, and then click
	     Add new Item.
	
	  b. Select the XML Schema file from the listing of Web Project items.
	
	4. Add one element to the new schema file.
	
	5. Add the solution to the source control.
	
	6. Open the single element schema file, and then click XML Source on the View
	  menu.
	
	7. Open the Tdlschema.xsd file, and then click XML Source on the View menu. Note
	  that you are prompted to check out the XSD file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600C
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
