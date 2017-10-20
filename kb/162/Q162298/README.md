---
layout: page
title: "Q162298: PRB: &quot;Multi Use&quot; Cannot be Selected Until .exe is Created"
permalink: /kb/162/Q162298/
---

## Q162298: PRB: &quot;Multi Use&quot; Cannot be Selected Until .exe is Created

{% raw %}

	Article: Q162298
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp600
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When building an OLE Server, you may want to allow multiple users to access one
	instance of an OLE server executable. You can do this by selecting Multi Use in
	the Instances list that is located on the Servers tab in the Project Info dialog
	box. If the Project has not been built into an executable at least once, this
	selection is not available. This selection is only available after the
	executable has been built if olepublic is selected in the Class Info dialog box
	for a class in the Visual Class Library.
	
	RESOLUTION
	==========
	
	Build the executable. When the library is displayed, select Multi Use.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Servers tab shows the class library name that is included in the project
	only after the executable has been built. So an OLE server executable that is
	designed to allow multiple users to access the same instance must be built at
	least twice. It must be built the first time so that the class library appears
	and you can select Multi Use for instancing. It must be built again so that the
	executable builds in multi use capability. Typically this is not a problem
	because the executable is built several times before it is made multi-user
	capable.
	
	The project does not know that the class is marked as olepublic until the
	executable is built.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a wait window program and add it to a new project.
	
	2. Add a library with a class in it to the project.
	
	3. Modify the class, mark its class as olepublic under the Class Info dialog
	  box, and save the class.
	
	4. On the Project menu, click Project Info.
	
	5. Click the Servers tab. Nothing is displayed, and you cannot select Multi Use
	  in the Instances list.
	
	Build the executable, and check the Servers tab again. The library is displayed
	and you can select Multi Use in the Instances list.
	
	NOTE: The same executable should not be used as an OLE server and as a standalone
	executable. If the executable is run as a standalone executable and then
	accessed as a server, two instances of the executable will run. The executable,
	running standalone, cannot be accessed as a server.
	
	REFERENCES
	==========
	
	"Visual FoxPro Developer's Guide," version 5, page 441
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	

{% endraw %}
