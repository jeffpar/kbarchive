---
layout: page
title: "Q172396: PRB: Access Violation When Accessing STL Object in DLL"
permalink: /kb/172/Q172396/
---

## Q172396: PRB: Access Violation When Accessing STL Object in DLL

{% raw %}

	Article: Q172396
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS NT:5.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC500 kbVC600
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When accessing an STL object created in one DLL or EXE through a pointer or
	reference in a different DLL or EXE, you may experience an access violation or
	other serious program errors including the appearance of data corruption or data
	loss.
	
	CAUSE
	=====
	
	Most classes in the Standard C++ Libraries use static data members directly or
	indirectly. Since these classes are generated through template instantiation,
	each executable image (usually with DLL or EXE file name extensions) will
	contain its own copy of the static data member for a given class. When a method
	of the class that requires the static data member is executed, it uses the
	static data member in the executable image in which the method code resides.
	Since the static data members in the executable images are not in sync, this
	action could result in an access violation or data may appear to be lost or
	corrupted.
	
	RESOLUTION
	==========
	
	1. Export accessor methods from the executable image that created the STL
	  object. These methods wrap the required functionality of the STL object. In
	  this way, the STL object will only be directly accessed inside a single
	  executable image. For example, suppose MyProgram.EXE needs to get the next
	  element in deque<MyClass> that resides in MyLibrary.DLL. MyLibrary.DLL
	  could export an accessor method, MyClass* DequeNextItem (/*...*/). Then
	  MyProgram.EXE could execute this method to get the next item in the deque.
	  See the code sample below for a more complete example.
	
	  This option works for STL objects that are either global, static, or static
	  data members of a class that are not exported from a DLL. This option will
	  not work for non-static data members of a class that are exported from a DLL
	  or for automatic data.
	
	2. Export the template class instantiation from one executable image and import
	  it into the other executable images. For example, if MyLibrary.DLL passes a
	  pointer to vector<MyClass> back to a function in MyProgram.EXE, then
	  export the classes MyClass and vector<MyClass> from MyLibrary.DLL. Then
	  import these classes into MyProgram.EXE. By doing this, you will have one
	  copy of the static class members residing in MyLibrary.DLL. For more
	  information about exporting and importing STL classes, please see the
	  following article in the Microsoft Knowledge Base:
	
	  Q168958 HOWTO: Exporting STL Components Inside & Outside of a Class
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	     //---------------------------------------------------------
	     // AVEXE.CPP
	     // Compile options needed: /GX
	     #pragma warning (disable : 4786)
	     #include <map>
	     #include <string>
	     #include <stdio.h>
	
	     __declspec(dllimport)
	     std::map<int,std::string>* GiveMeAMap(int n);
	
	     __declspec(dllimport)
	     void ShowMeTheMap(std::map<int,std::string> *amap);
	
	     __declspec(dllexport)
	     const char* MapItemX (std::map<int,std::string> *m, int x);
	
	     int main () {
	
	        // Create the map in the DLL
	        int x = 6;
	        std::map<int,std::string> *p = GiveMeAMap(x);
	
	        // Display the contents of the map from the DLL
	        printf("Showing contents from the DLL\n");
	        ShowMeTheMap(p);
	
	        // Display the contents of the map from the EXE
	        // using the accessor function from the DLL so we
	        // aren't directly accessing the map
	        printf("Showing contents from the EXE using accessor\n");
	        int i = x;
	        while (i--) {
	           printf("%d = %s\n",i,MapItemX(p,i));
	        }
	
	        // Access Violation when accessing the map that
	        // was created in the DLL from the EXE
	        printf("Showing contents from the EXE directly\n");
	        while (x--) {
	           printf("%d = %s\n",x,(*p)[x].c_str());
	        }
	
	        return 0;
	     }
	
	     //---------------------------------------------------------
	     // AVDLL.CPP
	     // Compile options needed /GX
	     #pragma warning (disable : 4786)
	     #include <map>
	     #include <string>
	     #include <stdlib.h>
	
	     // Create the map here in the DLL
	     __declspec(dllexport)
	     std::map<int,std::string>* GiveMeAMap(int n) {
	        std::map<int,std::string> *m = new std::map<int,std::string>;
	        while(n--) {
	           char b[33];
	           itoa(n,b,2);
	           (*m)[n] = std::string(b);
	        }
	        return m;
	     }
	
	     // We can access the map without error from the executable
	     // image where the map was created
	     __declspec(dllexport)
	     void ShowMeTheMap(std::map<int,std::string> *p) {
	        int x = p->size();
	        while (x--) {
	           printf("%d = %s\n",x,(*p)[x].c_str());
	        }
	     }
	
	     // An accessor method to return the associated C string
	     // for key x
	     __declspec(dllexport)
	     const char* MapItemX (std::map<int,std::string> *m, int x) {
	        return (*m)[x].c_str();
	     }
	
	======================================================================
	Keywords          : kbCRT kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS NT:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
