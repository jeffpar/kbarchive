---
layout: page
title: "Q185696: INFO: &quot;Invalid DOS path &lt;drive&gt;:&lt;path&gt;&quot; when Adding Files"
permalink: /kb/185/Q185696/
---

## Q185696: INFO: &quot;Invalid DOS path &lt;drive&gt;:&lt;path&gt;&quot; when Adding Files

{% raw %}

	Article: Q185696
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you try to add a project to a Visual SourceSafe (VSS) database, Visual C++
	(VC++) or other products may return the following error:
	
	  Invalid DOS path <drive>:<path>
	
	This may occur if the Data_Path variable in the Srcsafe.ini file points to an
	invalid location.
	
	MORE INFORMATION
	================
	
	When browsing for a database, VSS searches for the Srcsafe.ini file that is
	installed in the server installation directory of Visual SourceSafe.
	
	The error may occur for one of the following three reasons:
	
	- This is a new Visual C++ project.
	
	- The Visual C++ .opt file does not contain a valid path to the correct
	  Srcsafe.ini file.
	
	- The Data_Path variable of the Srcsafe.ini referenced by VC++ is invalid.
	
	By default, VC++ looks in the Windows registry at the path shown below to
	determine where the default Srcsafe.ini is located:
	
	     HKEY_LOCAL_MACHINE\Software\Microsoft\SourceSafe = Value: SCCServerPath
	       = {%INSTALLDIRECTORY%}ssscc.dll
	
	REFERENCES
	==========
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q184357 PRB: VC Opening Project in Wrong VSS Database
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe400a kbSSafe500
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
