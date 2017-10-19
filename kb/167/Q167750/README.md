---
layout: page
title: "Q167750: BUG: The pow() Function Doesn't Set Underflow Condition"
permalink: /kb/167/Q167750/
---

## Q167750: BUG: The pow() Function Doesn't Set Underflow Condition

	Article: Q167750
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbtool kbVC500bug kbVC600bugkbbuglist
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The pow() function does not set the errno variable to indicate that an underflow
	condition has occurred.
	
	RESOLUTION
	==========
	
	A potential solution is to check the base of the number that is being raised to
	a power and check the result of the pow() function. By customizing the
	_matherr() function, the underflow condition can be trapped and you can display
	an error message. The program below demonstrates this workaround.
	
	      #include <stdio.h>
	      #include <math.h>
	      #include <ERRNO.H>
	      #include <string.h>
	      extern int errno;
	
	      /* The _matherr routine can be customized to handle the specific
	          underflow problem that is encountered.  See online help for
	          more information on _matherr().
	      */ 
	      int _matherr( struct _exception *except )
	      {
	          /* Handle errors caused by pow() function.*/ 
	          if(strcmp(except->name,"pow")==0)
	          {
	              switch(except->type)
	              {
	                  case _DOMAIN:
	                  {
	                      printf("Domain Error: Argument not in domain.\n");
	                      return 1;
	                      break;
	                  }
	                  case _SING:
	                  {
	                      printf("Singularity Error: Argument singularity "
	                             "error.\n");
	                      return 1;
	                      break;
	        }
	                  case _OVERFLOW:
	                  {
	                      printf("Overflow Error: Overflow range error.\n");
	                      return 1;
	                      break;
	                  }
	                  case _PLOSS:
	                  {
	                      printf("Precision Error: Partial loss of "
	                             "significance.\n");
	                      return 1;
	                      break;
	                  }
	                  case _TLOSS:
	                  {
	                      printf("Precision Error: Total loss of "
	                             "significance.\n");
	                      return 1;
	                      break;
	        }
	                  case _UNDERFLOW:
	        {
	                      printf("Underflow Error: The result is too small to "
	                             "be represented.\n");
	                      return 1;
	                      break;
	                  }
	                  default:
	                  {
	                      printf("Unknown Error Occurred While Performing Math "
	                             "Operation.\n");
	                      return 1;
	                      break;
	        }
	         }
	          }
	          else
	              return 0;  /* non-error condition */ 
	      }
	
	      void main(void)
	      {
	
	      double x = -1.0e+307;
	      double y = -1.0e+307;
	      double z;
	
	      z = pow(x,y);
	
	      /*
	      Check for error conditions.  _matherr() is automatically
	      called should there be a math related error.
	      */ 
	
	      /*Note that errno is not set properly & _matherr() is called.*/ 
	      if (errno != 0)
	          printf("ERROR! Errno: %i\n",errno);
	      else
	          printf("pow( %e, %e ) = %f\n", x, y, z);
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The help topic for pow() states:
	
	  No error message is printed on overflow or underflow.
	
	However, an overflow does set errno to the value of 34 indicating "Result too
	large". When an underflow occurs, the returned value is 0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbVC500bug kbVC600bug kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : :5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
