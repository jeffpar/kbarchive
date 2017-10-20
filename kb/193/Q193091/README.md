---
layout: page
title: "Q193091: FIX: VSS OLE Automation Error Message &quot;Bad Access Parameter&quot;"
permalink: /kb/193/Q193091/
---

## Q193091: FIX: VSS OLE Automation Error Message &quot;Bad Access Parameter&quot;

{% raw %}

	Article: Q193091
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbAutomation kbSSafe500bug kbSSafe600fix
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log onto Visual SourceSafe using OLE Automation objects, you might get
	the following error message:
	
	  Run time Error '-2147352566(8002000a)':
	  Invalid access code(bad parameter).
	
	CAUSE
	=====
	
	When you log onto Visual SourceSafe using the VSSDatabase.Open method, you used
	a password with eight or more characters.
	
	RESOLUTION
	==========
	
	To work around this problem, use a password that is less than eight characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been fixed in Visual SourceSafe 6.0
	
	MORE INFORMATION
	================
	
	You can use a password containing up to 15 characters Visual SourceSafe.
	However, when you log onto Visual SourceSafe using OLE automation objects, you
	will receive the error message listed above if the password is eight or more
	characters. For the following steps to work correctly, you must have
	SourceSafe/Client server installed under the C:\Vss directory.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run SSAdmin.exe from the Win32 directory under your Visual SourceSafe
	  installation directory.
	
	2. From the Users menu, select Add User.
	
	3. In the User name text box, type the following:
	
	  User1
	
	4. In the Password text box, type the following:
	
	  password
	
	5. Click OK.
	
	6. Close SSAdmin.exe.
	
	7. Open Visual Basic.
	
	8. Create a New Standard EXE project.
	
	9. Add a reference to the Microsoft SourceSafe 5.0 Type Library2.
	
	10. Place a Command button on the form Form1, Command1.
	
	11. Copy the following lines of code into the Command1_Click()procedure:
	
	         Dim VSSData1 as New VSSDatabase
	         VSSData1.Open "C:\vss\srcsafe.ini", "User1", "password"
	
	12. Execute the project.
	
	13. Click the command button, Command1.
	
	RESULT: The following error message appears:
	
	  Run time Error '-2147352566(8002000a)': Invalid access code(bad parameter).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbSSafe500bug kbSSafe600fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe500
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
