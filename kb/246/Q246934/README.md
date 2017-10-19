---
layout: page
title: "Q246934: BUG: istream::readsome Does Not Read Correctly on File Stream"
permalink: /kb/246/Q246934/
---

## Q246934: BUG: istream::readsome Does Not Read Correctly on File Stream

	Article: Q246934
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	The istream::readsome function does not read correct data from a file.
	
	CAUSE
	=====
	
	The basic_istream::readsome function has some limitations when used on certain
	streams. Moreover, the MSDN documentation for basic_istream::readsome states
	that internally basic_istream::readsome calls the read function. However, in the
	basic_istream::readsome implementation, the read function is never called.
	
	RESOLUTION
	==========
	
	Give preference to basic_istream::read.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Here is a code sample that illustrates the problem and provides a workaround:
	
	  #include <iostream>
	  #include <fstream>
	
	  using namespace std;
	
	  int main()
	  {
	  	ifstream file("c:\\config.sys",ios::in|ios::binary);
	
	  	static char buffer[10];
	  	buffer[10] = 0;
	
	  	if ( !file )
	  		cout << "unable to open file" << endl;
	  	else
	  	{
	  		file.readsome(buffer,10); // It does not work properly.
	  		//file.read( buffer, 10 ); // Uncomment this line for work around.
	  		cout << buffer << endl;
	
	  		cout << endl << "File contents are:" << endl;
	  		file.seekg( 0 );	// Rewind file.
	  		while( file.good() )
	  		{
	  			file.getline( buffer, 10 );
	  			cout << buffer << endl;
	  		}
	  	}
	  	return 0;
	  }
	
	Additional query words: stl
	
	======================================================================
	Keywords          :  
	Issue type        : kbbug
	
	=============================================================================
	
