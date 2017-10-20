---
layout: page
title: "Q246315: Interix, GNU, Configure Scripts, and Portability"
permalink: /kb/246/Q246315/
---

## Q246315: Interix, GNU, Configure Scripts, and Portability

{% raw %}

	Article: Q246315
	Product(s): Microsoft Windows NT
	Version(s): 2.2.1,2.2.2,2.2.3,2.2.4
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Interix versions 2.2.1, 2.2.2, 2.2.3, 2.2.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Porting GNU software packages can be difficult because path name assumptions are
	hard coded in the source, and configure scripts are designed to make porting to
	traditional systems trivial.
	
	It may be useful to set up a test system installed at the root of a drive, where
	the value of $Interix_ROOT is //C, so that the file hierarchy is very similar to
	a traditional system. By employing this method, the program can be made to work
	quickly. Further investigation can determine the path name assumptions.
	
	Further, the ability of configure scripts to work out the characteristics of
	Interix depends entirely on how "clever" the script is, and the assumptions it
	makes. Because of this, it is not possible to define a recipe for fixing
	configure scripts because each is different.
	
	MORE INFORMATION
	================
	
	For a more complete description of this topic, see the "Porting Applications in
	C" and "Configure Scripts with Interix" Tech Notes at the following Interix Web
	site:
	
	  http://www.interix.com/newinterix/main_technotes.htm
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbInterixSearch kbUNIXSearch kbInterix221 kbInterix222 kbInterix223 kbInterix224
	Version           : :2.2.1,2.2.2,2.2.3,2.2.4
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
