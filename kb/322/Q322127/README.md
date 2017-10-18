---
layout: page
title: "Q322127: Empty Base Class/Structure Assignment Operator May Corrupt Data"
permalink: kb/322/Q322127/
---

## Q322127: Empty Base Class/Structure Assignment Operator May Corrupt Data

	Article: Q322127
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a compiler-generated assignment operator for an empty base class or
	structure, the code that the compiler generates may corrupt data or write beyond
	the end of the class or the structure.
	
	CAUSE
	=====
	
	This problem occurs because of a bug in the Visual C++ compiler.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Visual Studio 6.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix has the file attributes (or later) that are
	listed in the following table. The dates and times for these files are listed in
	coordinated universal time (UTC). When you view the file information, it is
	converted to local time. To find the difference between UTC and local time, use
	the Time Zone tab in the Date and Time tool in Control Panel.
	
	  Date         Time   Version         Size       File name
	  --------------------------------------------------------------
	  14-May-2002  10:40  12.0.9586.0     1,224,755  C1xx.dll
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	You can use the following sample code to demonstrate the problem. Note that the
	values of 'a.m_n' and 'b.m_n' differ.
	
	  #include <stdio.h>
	
	  class CEmpty
	  {
	  public:
	  	CEmpty() throw()
	  	{
	  	}
	  	CEmpty( const CEmpty& ) throw()
	  	{
	  	}
	  	~CEmpty() throw()
	  	{
	  	}
	
	  	CEmpty get() const throw()
	  	{
	  		return( *this );
	  	}
	  };
	
	  class CDerived :
	  	public CEmpty  // Empty base class 
	  {
	  public:
	  	int m_n;
	  	CDerived& operator=( const CDerived& src ) throw()
	  	{
	  		m_n = src.m_n;
	                  // Overwrites low byte of m_n.
	  		CEmpty::operator=( src.get() ); 
	  		return( *this );
	  	}	
	  };
	
	  int main( int, char** )
	  {
	  	CDerived a;
	  	a.m_n = 0x01020304;
	  	CDerived b;
	  	b = a;
	  	printf( "0x%08x\n", b.m_n );
	  	return( 0 );
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
