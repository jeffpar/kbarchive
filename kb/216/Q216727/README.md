---
layout: page
title: "Q216727: FIX: Initializing const int With float Literal Gets Bad Value"
permalink: /kb/216/Q216727/
---

## Q216727: FIX: Initializing const int With float Literal Gets Bad Value

{% raw %}

	Article: Q216727
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbCompiler kbCPPonly kbVC600bug kbVC600fix kbVS600sp2 kbVS600SP1 kbVS600s
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When initializing a const int with a float literal, the value stored in the
	const int may be incorrect.
	
	RESOLUTION
	==========
	
	Use one of the following as workarounds.
	
	1. Use an integer literal.
	
	2. Cast the float literal to an int.
	
	3. Create a const float variable and assign the float literal to it. Then assign
	  that const float to the const int.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  #include <iostream>
	  const int ConstVal = 75.0;
	  int main()
	  {
	      std::cout << "ConstVal = " << ConstVal << std::endl;
	      return 0;
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbCompiler kbCPPonly kbVC600bug kbVC600fix kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
